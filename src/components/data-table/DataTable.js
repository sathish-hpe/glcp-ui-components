import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Box, Grommet, DataTable as GrommetTable } from 'grommet'
import { debounce } from 'lodash'
import styled from 'styled-components'
import { deepMerge } from 'grommet/utils'
import { hpe } from 'grommet-theme-hpe'

import { Loader } from '../loader/Loader'
import { Typography } from '../typography/Typography'
import { dimensions } from '../utils'
import ActionButton from '../action-button/ActionButton'
import { Pagination } from '../pagination/Pagination'
import { Search } from '../search/Search'

/**
 * Summary info displayed on top of the table indicating number of selected records, number
 * of total records and the entity name
 */
const TableSummary = ({
  numOfSelected,
  numOfRecords,
  entityName,
  isLoading
}) => {
  let summaryComp = null
  if (numOfSelected > 0) {
    summaryComp = (
      <Box direction="row" gap="xxsmall">
        <Typography size="small" weight="bold" type="text">
          {numOfSelected}
        </Typography>
        <Typography size="small" type="text">
          of
        </Typography>
        <Typography size="small" weight="bold" type="text">
          {numOfRecords}
        </Typography>
        <Typography
          size="small"
          type="text"
        >{`${entityName} selected`}</Typography>
      </Box>
    )
  } else if (!isLoading) {
    summaryComp = (
      <Box direction="row" gap="xxsmall">
        <Typography size="small" weight="bold" type="text">
          {numOfRecords}
        </Typography>
        <Typography size="small" type="text">
          {entityName}
        </Typography>
      </Box>
    )
  } else {
    summaryComp = (
      <Typography
        size="small"
        type="text"
      >{`Loading ${entityName}`}</Typography>
    )
  }

  return <>{summaryComp}</>
}

TableSummary.propTypes = {
  /**
   * Number of selected records
   */
  numOfSelected: PropTypes.number,

  /**
   * Total number of records
   */
  numOfRecords: PropTypes.number,

  /**
   * Name of entity displayed in table; default is 'item(s)'
   */
  entityName: PropTypes.string,

  /**
   * True, if table is loading
   */
  isLoading: PropTypes.bool.isRequired
}

TableSummary.defaultProps = {
  numOfSelected: 0,
  numOfRecords: 0,
  entityName: 'item(s)'
}

/**
 * upgrade to "grommet-theme-hpe": "2.0.2" seems to be causig issue with table header
 * checkbox not lining up correctly when table is in fill="horizontal" mode.
 * This is a workaround to align header and body checkboxes.
 * https://github.com/grommet/grommet-theme-hpe/issues/170
 */
const StyledBox = styled(Box)`
  table thead tr th:first-child {
    width: 2rem;
  }
`
export const DataTable = ({
  grid,
  summary,
  selection,
  search,
  filterButton,
  testId,
  pagination
}) => {
  // value to serach on
  const defaultVal = search && search.defaultVal
  const [searchValue, setSearchValue] = React.useState(defaultVal || '')
  useEffect(() => {
    if (search && Object.prototype.hasOwnProperty.call(search, 'defaultVal')) {
      setSearchValue(search.defaultVal)
    }
  }, [search])
  const [debouncedSearchValue, setDebouncedSearchValue] = React.useState('')

  // state to track loading indicator
  const [isLoading, setIsLoading] = useState(true)
  // array of selected items
  const [selectionArr, setSelectionArr] = useState([])

  /**
   * TODO: Change this to detect row click instead
   */
  const interactiveElementsInDataTable = {
    checkbox: true,
    button: true,
    svg: true,
    path: true
  }

  const {
    columns,
    data,
    height,
    onClickRow,
    defaultActions,
    pad,
    ...restGrid
  } = grid

  const initialSelection = selection && selection.initSelection

  const handleDebouncedSearchValue = useMemo(
    () => debounce((value) => setDebouncedSearchValue(value), 500),
    []
  )

  useEffect(() => {
    if (selection || search) {
      setIsLoading(true)
    }
    if (selection && selection.onSelectionChange) {
      setSelectionArr([])
      selection.onSelectionChange([])
    }
    if (search) search.onSearchValueChange(debouncedSearchValue)
    return () => {
      // cancel debounce timeout on unmount
      handleDebouncedSearchValue.cancel()
    }
  }, [debouncedSearchValue]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (data) {
      // reset loading indicator when new data is being set
      setIsLoading(false)
      setSelectionArr(initialSelection || [])
    }
  }, [data, initialSelection])

  function handleClickRow(e) {
    if (interactiveElementsInDataTable[e.target.type || e.target.tagName]) {
      e.stopPropagation()
      return
    }
    if (onClickRow) onClickRow(e)
  }

  let tableColumns = columns
  if (defaultActions) {
    tableColumns = [
      ...tableColumns,
      {
        property: 'Edit',
        sortable: false,
        header: '',
        render: (datum) => (
          <ActionButton
            actions={defaultActions}
            datum={datum}
            testId="default-action-btn"
          />
        )
      }
    ]
  }

  tableColumns.forEach((col) => {
    if (!col.sortable) {
      col.sortable = false
    }
  })

  const table = (
    <Box overflow={height ? 'auto' : null} height={height} fill="horizontal">
      <GrommetTable
        style={{ tableLayout: 'auto' }}
        sortable={tableColumns.some((col) => col.sortable)}
        select={selection && selection.onSelectionChange ? selectionArr : null}
        onSelect={
          selection && selection.onSelectionChange
            ? (select) => {
                setSelectionArr(select)
                // notify component user of selection change
                selection.onSelectionChange(select)
              }
            : null
        }
        primaryKey={selection ? selection.primaryKey : null}
        columns={[...tableColumns]}
        data={data}
        fill="horizontal"
        onClickRow={() => handleClickRow}
        pad={
          pad || {
            body: { horizontal: 'small', vertical: 'medium' }
          }
        }
        placeholder={
          isLoading ? (
            <Box
              fill
              align="center"
              justify="center"
              direction="row"
              pad="large"
              gap="small"
              background={{ color: 'background-front', opacity: 'strong' }}
            >
              <Loader label="Loading..." testId="spinner-with-text" />
            </Box>
          ) : null
        }
        data-testid="table"
        {...restGrid}
      />

      {pagination && (
        <Pagination
          alignSelf="end"
          itemsPerPage={pagination.itemsPerPage}
          totalItems={pagination.totalItems}
          page={pagination.page}
          setPage={({ page: nextPage }) => {
            pagination.setPage(nextPage)
          }}
          pageIdxInfo={pagination.pageIdxInfo}
          testId={`pagination-${testId}`}
        />
      )}
    </Box>
  )

  return (
    <Box direction="column" data-testid={testId}>
      {(search || selection) && (
        <Box direction="row" gap="large" align="end" pad="none">
          {search && search.onSearchValueChange && (
            <Box direction="row" align="end" gap="medium" pad="none">
              <Search
                width={search.width}
                value={searchValue}
                handleCustomSearch={(value) => {
                  setSearchValue(value)
                  handleDebouncedSearchValue(value)
                }}
                placeholder={search.placeholder}
                size="small"
                testId="search-field"
              />
              <Box flex="grow">{filterButton || null}</Box>
            </Box>
          )}
          {selection && selection.bulkActions && (
            <Box style={{ whiteSpace: 'nowrap' }} data-testid="bulk-actions">
              {selection.bulkActions}
            </Box>
          )}
        </Box>
      )}

      {summary && (
        <Box align="start" pad={{ top: 'xsmall' }} data-testid="table-summary">
          <TableSummary
            numOfSelected={selectionArr.length}
            numOfRecords={
              pagination ? pagination.totalItems : data && data.length
            }
            entityName={summary.entityName}
            isLoading={isLoading}
          />
        </Box>
      )}

      <Grommet
        theme={deepMerge(hpe, {
          checkBox: { extend: `justify-content:start` }
        })}
      >
        <Box
          basis="100%"
          align="center"
          justify="center"
          pad={
            (search && search.onSearchValueChange) || summary
              ? { top: 'medium' }
              : null
          }
        >
          {selection && selection.onSelectionChange ? (
            <StyledBox fill="horizontal">{table}</StyledBox>
          ) : (
            table
          )}
        </Box>
      </Grommet>
    </Box>
  )
}

DataTable.propTypes = {
  grid: PropTypes.shape({
    /**
     * array of objects representing table columns
     */
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        property: PropTypes.string.isRequired,
        // don't allow passing in element; Safari crashes with selectable
        // tables if an element is passed in
        header: PropTypes.string.isRequired,
        primary: PropTypes.bool,
        render: PropTypes.func,
        size: PropTypes.oneOf(dimensions),
        search: PropTypes.bool,
        sortable: PropTypes.bool,
        units: PropTypes.string,
        hidden: PropTypes.bool
      })
    ).isRequired,

    /**
     * array of objects representing table data; original value must be undefined or
     * loading will not display on first load
     */
    data: PropTypes.arrayOf(PropTypes.object),

    /**
     * handler triggered on row click
     */
    onClickRow: PropTypes.func,

    /**
     * Size at which rows start scrolling; this is the same as grommet's DataTable size property
     * If set, all columns will be the same width and table won't be resizeable.
     */
    height: PropTypes.oneOf(dimensions),

    /**
     * Array of default actions. A DropButton will dispaly if multiple actions; otherwise, action will display.
     */
    defaultActions: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        icon: PropTypes.element,
        onClick: PropTypes.func.isRequired
      })
    ),

    /**
     * Allow body pad only for now
     */
    pad: PropTypes.shape({
      body: PropTypes.shape({
        horizontal: PropTypes.oneOf(dimensions),
        vertical: PropTypes.oneOf(dimensions)
      })
    })
  }).isRequired,

  summary: PropTypes.shape({
    /**
     * Name of entity displayed; default is 'item(s)'
     */
    entityName: PropTypes.string.isRequired
  }),

  selection: PropTypes.shape({
    /**
     * initial selected items (checkbox will be checked)
     */
    initSelection: PropTypes.array,

    /**
     * handler called on any selection changes
     */
    onSelectionChange: PropTypes.func.isRequired,

    /**
     * primary key
     */
    primaryKey: PropTypes.string.isRequired,

    /**
     * element containing bulk action buttons
     */
    bulkActions: PropTypes.element
  }),

  /**
   * search object containing search related properties
   */
  search: PropTypes.shape({
    /**
     * width of the search field; default is medium
     */
    width: PropTypes.oneOf(dimensions),
    /**
     * default search value for the datatable
     */
    defaultVal: PropTypes.string,

    /**
     * string repesenting search field's placeholder text
     */
    placeholder: PropTypes.string.isRequired,

    /**
     * handler called on any search value changes
     */
    onSearchValueChange: PropTypes.func.isRequired
  }),

  /**
   * FilterButton component to display next to search if provided
   */
  filterButton: PropTypes.element,

  /**
   * data-testid, will be used for testing
   */
  testId: PropTypes.string.isRequired,

  pagination: PropTypes.shape({
    totalItems: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number,
    page: PropTypes.number,
    setPage: PropTypes.func,
    pageIdxInfo: PropTypes.string
  })
}

DataTable.defaultProps = {
  summary: undefined,
  selection: undefined,
  search: undefined,
  filterButton: undefined,
  pagination: undefined
}
