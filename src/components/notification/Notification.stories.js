import React, { useState } from 'react'
import { Box, Button, Grommet } from 'grommet'
import {
  StatusCritical,
  StatusGood,
  StatusUnknown,
  StatusWarning
} from 'grommet-icons'
import reactElementToJSXString from 'react-element-to-jsx-string'

import { Notification } from './Notification'

export default {
  title: 'CCS/Notification',
  component: Notification
}

const Template = (args) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(undefined)

  const notificationArgs = { ...args, onClose: handleClose }

  return (
    <Grommet>
      <Box align="start" gap="medium">
        <Button
          label="Show me the notification"
          onClick={handleOpen}
          primary
          data-testid="main-btn"
        />
      </Box>
      {open && <Notification {...notificationArgs} />}
    </Grommet>
  )
}

export const TopStatusGood = Template.bind({})
TopStatusGood.args = {
  position: 'top',
  icon: <StatusGood color="text-strong" />,
  text: 'This is a notifcation',
  testId: 'status-good-notification'
}

TopStatusGood.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Ts53TAipMolmsv9DxWG3p0/HPE-Layer-Component?node-id=100%3A84'
  },
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...TopStatusGood.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const BottomStatusCritical = Template.bind({})
BottomStatusCritical.args = {
  position: 'bottom',
  icon: <StatusCritical color="text-strong" />,
  text: 'This is a critical notifcation',
  backgroundColor: 'status-critical',
  testId: 'status-critical-notification'
}

BottomStatusCritical.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...BottomStatusCritical.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const TopStatusWarning = Template.bind({})
TopStatusWarning.args = {
  icon: <StatusWarning color="text-strong" />,
  text: 'This is a warning notifcation',
  backgroundColor: 'status-warning',
  testId: 'status-warning-notification'
}

TopStatusWarning.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...TopStatusWarning.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const TopStatusUnknown = Template.bind({})
TopStatusUnknown.args = {
  icon: <StatusUnknown color="text-strong" />,
  text: 'This is a unknown type notifcation',
  backgroundColor: 'status-unknown',
  testId: 'status-unknown-notification'
}

TopStatusUnknown.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...TopStatusUnknown.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const NoIcon = Template.bind({})
NoIcon.args = {
  text: 'This is a no icon notifcation',
  testId: 'no-icon-notification'
}

NoIcon.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...NoIcon.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

const InlineTemplate = (args) => <Notification {...args} />

export const InlineStatusGood = InlineTemplate.bind({})
InlineStatusGood.args = {
  type: 'inline',
  backgroundColor: 'status-ok',
  icon: <StatusGood color="text-strong" />,
  text: 'This is an inline notifcation',
  testId: 'ok-inline-notification'
}

InlineStatusGood.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...InlineStatusGood.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const InlineStatusCritical = InlineTemplate.bind({})
InlineStatusCritical.args = {
  type: 'inline',
  text: 'This is a critical notifcation',
  backgroundColor: 'status-critical',
  testId: 'critical-inline-notification'
}

InlineStatusCritical.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/haSQhFGJH6yrkhMda4CP7p/Master-Prototype-(Latest-Designs)?node-id=29098%3A79771'
  },
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...InlineStatusCritical.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const InlineStatusWarning = InlineTemplate.bind({})
InlineStatusWarning.args = {
  type: 'inline',
  text: 'This is a warning notifcation',
  backgroundColor: 'status-warning',
  testId: 'warning-inline-notification'
}

InlineStatusWarning.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...InlineStatusWarning.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const InlineStatusUnknown = InlineTemplate.bind({})
InlineStatusUnknown.args = {
  type: 'inline',
  text: 'This is a unknown type notifcation',
  backgroundColor: 'status-unknown',
  testId: 'unknown-inline-notification'
}

InlineStatusUnknown.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...InlineStatusUnknown.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}
