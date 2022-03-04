import React, { useState, useEffect } from 'react'
import { Box, Nav } from 'grommet'
import PropTypes from 'prop-types'

import { Button } from '../button/Button'
import { Typography } from '../typography/Typography'

export const MenuList = ({
  menuData,
  testId,
  defaultActiveId,
  menuItemPadding,
  highlightOnSelect,
  onClickMenuItem,
  menuListDirection
}) => {
  const [active, setActive] = useState(defaultActiveId)

  useEffect(() => {
    setActive(defaultActiveId)
  }, [defaultActiveId])

  const handleMenuItemClick = (item) => {
    if (highlightOnSelect) {
      setActive(item.id)
    }
    onClickMenuItem(item)
  }

  return (
    <Nav
      direction={menuListDirection}
      background="white"
      pad="small"
      data-testid={testId}
    >
      {menuData &&
        menuData.length > 0 &&
        menuData.map((item) => {
          const isHidden = item.isHidden ? item.isHidden() : false
          return (
            !isHidden && (
              <Button
                key={item.id}
                onClick={() => handleMenuItemClick(item)}
                plain
                active={item.id === active && highlightOnSelect}
                testId={item.testId}
              >
                {() => (
                  <Box pad={menuItemPadding} width="small">
                    <Typography
                      size="medium"
                      type="text"
                      weight={
                        item.id === active && highlightOnSelect
                          ? 'bold'
                          : 'normal'
                      }
                      level={
                        item.id === active && highlightOnSelect ? 4 : undefined
                      }
                      testId={`desc-${item.testId}`}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                )}
              </Button>
            )
          )
        })}
    </Nav>
  )
}

MenuList.propTypes = {
  /**
   * This prop will have the array of menu list.
   * Each object conains id, label and testId as mandatory properties
   * Additional properties can be optional based on consumer's logic of handling click
   */
  menuData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      testId: PropTypes.string.isRequired,
      isHidden: PropTypes.func
    })
  ).isRequired,
  defaultActiveId: PropTypes.number,
  /**
   * It will be used for component menu item padding
   * This can have a format of object { vertical: 'xsmall', left: 'small' }
   */
  menuItemPadding: PropTypes.object,
  /**
   * This prop is a boolean value.
   * This is optional. Default is false
   * This defines whether a menu item has to be highlighted on select
   */
  highlightOnSelect: PropTypes.bool,
  /**
   * This prop is a function value
   * This function defines on click handling of a menu item
   */
  onClickMenuItem: PropTypes.func,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired,
  menuListDirection: PropTypes.string
}

MenuList.defaultProps = {
  highlightOnSelect: false,
  menuItemPadding: {},
  defaultActiveId: 0,
  onClickMenuItem: () => {},
  menuListDirection: 'column'
}
