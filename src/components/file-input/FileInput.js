import { FileInput as GrommetFileInput, Grommet, Box, Text } from 'grommet'
import { Trash } from 'grommet-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { hpe } from 'grommet-theme-hpe'
import { deepMerge } from 'grommet/utils'
import styled from 'styled-components'

import { bytesToSize } from '../utils'

const StyledBox = styled(Box)`
  & > div button {
    z-index: 1;
  }
`
export const FileInput = ({ testId, ...rest }) => (
  <Grommet
    theme={deepMerge(hpe, {
      fileInput: {
        icons: {
          remove: Trash
        },
        pad: { horizontal: 'large', vertical: 'medium' },
        round: { size: 'xsmall' }
      }
    })}
  >
    <StyledBox>
      <GrommetFileInput
        data-testid={testId}
        renderFile={(file) => (
          <Box direction="row" gap="small">
            <Text weight="bold">{file.name}</Text>
            <Text color="text-weak">({bytesToSize(file.size)})</Text>
          </Box>
        )}
        {...rest}
      />
    </StyledBox>
  </Grommet>
)
FileInput.propTypes = {
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}
FileInput.defaultProps = {}
