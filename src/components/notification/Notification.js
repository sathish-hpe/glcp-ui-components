import React from 'react'
import PropTypes from 'prop-types'
import { Box, Layer, ThemeContext } from 'grommet'
import {
  FormClose,
  CircleAlert,
  StatusGood,
  StatusUnknown,
  StatusWarning
} from 'grommet-icons'

import { Typography } from '../typography/Typography'
import { Button } from '../button/Button'

export const Notification = ({
  type,
  position,
  icon,
  text,
  onClose,
  backgroundColor,
  testId,
  ...rest
}) => {
  if (type === 'inline') {
    const defaults = { icon: null, color: null }
    if (backgroundColor === 'status-critical') {
      defaults.icon = <CircleAlert size="small" />
      defaults.color = 'rgba(252, 97, 97, 0.24)'
    } else if (backgroundColor === 'status-ok') {
      defaults.icon = <StatusGood size="small" />
      defaults.color = 'rgba(199, 250, 232)'
    } else if (backgroundColor === 'status-warning') {
      defaults.icon = <StatusWarning size="small" />
      defaults.color = 'rgba(255, 170, 21, 0.24)'
    } else if (backgroundColor === 'status-unknown') {
      defaults.icon = <StatusUnknown size="small" />
      defaults.color = 'rgba(204, 204, 204, 0.24)'
    } else {
      defaults.color = backgroundColor
    }

    return (
      <Box
        background={defaults.color}
        align="center"
        pad="small"
        round="4px"
        gap="small"
        direction="row"
        data-testid={testId}
      >
        {icon || defaults.icon}
        {text}
      </Box>
    )
  }
  return (
    <ThemeContext.Extend
      value={{
        layer: {
          container: {
            zIndex: '1000'
          }
        }
      }}
    >
      <Layer
        position={position}
        modal={false}
        margin={{ vertical: 'medium', horizontal: 'small' }}
        responsive={false}
        round="small"
        data-testid={testId}
        {...rest}
      >
        <Box
          align="center"
          direction="row"
          gap="xsmall"
          justify="between"
          round="small"
          elevation="medium"
          pad="small"
          background={backgroundColor}
        >
          <Box align="center" direction="row" gap="small">
            {icon && (
              <Box width="24px" height="24px">
                {icon}
              </Box>
            )}
            <Typography
              type="text"
              color={{ light: 'text', dark: 'text-strong' }}
              testId="notification-text"
            >
              {text}
            </Typography>
          </Box>
          <Button
            icon={<FormClose />}
            onClick={onClose}
            plain
            testId="close-button"
          />
        </Box>
      </Layer>
    </ThemeContext.Extend>
  )
}

Notification.propTypes = {
  /**
   * default type shows a a pop up
   */
  type: PropTypes.oneOf(['inline', 'default']),

  /**
   * Position of the notification; top is default - not used for inline type
   */
  position: PropTypes.oneOf([
    'bottom',
    'bottom-left',
    'bottom-right',
    'center',
    'end',
    'hidden',
    'left',
    'right',
    'start',
    'top',
    'top-left',
    'top-right'
  ]),

  /**
   * icon displayed to the left of the text
   */
  icon: PropTypes.element,

  /**
   * notification text
   */

  text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,

  /**
   * function to close the dialog; close button always displays for default notifications - not used for inline type
   */
  onClose: PropTypes.func,

  /**
   * color of backgound
   */
  backgroundColor: PropTypes.oneOf([
    'status-critical',
    'status-warning',
    'status-ok',
    'status-unknown'
  ]),

  /**
   * data-testid, will be used for testing
   */
  testId: PropTypes.string.isRequired
}

Notification.defaultProps = {
  type: 'default',
  position: 'top',
  icon: undefined,
  backgroundColor: 'status-ok',
  onClose: undefined
}
