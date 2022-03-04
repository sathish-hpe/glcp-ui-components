import React from 'react'
import { Box } from 'grommet'
import {
  User,
  Aruba,
  Key,
  Note,
  Magic,
  Desktop,
  StatusGood
} from 'grommet-icons'

import { Button } from '../button/Button'
import { Typography } from '../typography/Typography'

import { Card } from './Card'

export default {
  title: 'CCS/Card',
  component: Card
}

const Template = (args) => <Card {...args} />

export const Basic = Template.bind({})
Basic.args = {
  cardWidth: 'small',
  title: 'Admins',
  description: 'Find list of administrators in the system',
  testId: 'cardBody'
}

export const Icon = Template.bind({})
Icon.args = {
  cardWidth: 'small',
  icon: <Key size="medium" />,
  title: 'User Details',
  description:
    'Get more information on your account, including name, profile image, etc',
  testId: 'cardBody'
}

export const IconClick = Template.bind({})
IconClick.args = {
  cardWidth: 'small',
  icon: <Note size="medium" />,
  title: 'Clickable card',
  description:
    'Define a function for onClick so this card is clickable with a resulting action',
  testId: 'cardBody',
  onClick: () => {}
}

export const BackgroundButton = Template.bind({})
BackgroundButton.args = {
  background: 'yellow',
  icon: <Aruba size="medium" color="darkorange" />,
  title: 'Aruba Application',
  description: 'Configure settings for the Aruba app in this location',
  action: (
    <Button
      size="small"
      label="Configure"
      color="darkorange"
      secondary
      testId="action-btn"
    />
  ),
  testId: 'cardBody'
}

export const NoBackgroundLargerTitleFancyIcon = Template.bind({})
NoBackgroundLargerTitleFancyIcon.args = {
  icon: (
    <Box round="xsmall" pad="xsmall" background="#00739d">
      <User size="medium" color="white" />
    </Box>
  ),
  title: 'Create a New Account',
  titleSize: 'xlarge',
  description: 'You can always create a new organization account',
  action: (
    <Button label="Create Account" primary size="small" testId="action-btn" />
  ),
  testId: 'cardBody'
}
export const BackgroundForegroundColor = Template.bind({})
BackgroundForegroundColor.args = {
  background: '#00739D',
  foregroundColor: 'white',
  icon: <Magic color="brand" size="medium" />,
  title: 'Take a Tour',
  description:
    'See everything the HPE console has to offer in this short tour.',
  action: (
    <Button
      color="brand"
      label=""
      secondary
      size="small"
      testId="start-tour-btn"
    >
      <Typography
        type="text"
        color="white"
        weight="bold"
        testId="star-tour-txt"
      >
        Start Tour
      </Typography>
    </Button>
  ),
  testId: 'start-tour-card'
}

export const StatCardsWithIcon = Template.bind({})
StatCardsWithIcon.args = {
  cardWidth: 'medium',
  icon: <Desktop color="green" />,
  title: (
    <Typography size="xxlarge" testId="tile-title" type="text" weight="bold">
      90
    </Typography>
  ),
  description: (
    <Typography size="medium" testId="tile-subtitle" type="text">
      Total Devices
    </Typography>
  ),
  align: 'center',
  textAlign: 'center',
  testId: 'stat-card-with-icon',
  onClick: () => {}
}
StatCardsWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/rgRsolnt0ZPeskUwrMgzyb/Device-Management?node-id=4283%3A60666'
  }
}

export const TabActionCardsWithIcon = Template.bind({})
TabActionCardsWithIcon.args = {
  cardWidth: 'medium',
  icon: (
    <Box pad="small" background="#EFEFEF" round align="end">
      <StatusGood color="gray" />
    </Box>
  ),
  title: (
    <Typography size="medium" testId="tile-subtitle" type="text">
      Assigned & Licensed
    </Typography>
  ),
  description: (
    <Typography size="xxlarge" testId="tile-title" type="text" weight="bold">
      101
    </Typography>
  ),
  direction: 'row-reverse',
  justify: 'between',
  align: 'center',
  testId: 'tab-action-card-with-icon',
  onClick: () => {}
}
