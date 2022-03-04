import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { HelpOption } from 'grommet-icons'

import { DropMenu } from './DropMenu'

export default {
  title: 'CCS/DropMenu',
  component: DropMenu,
  decorators: [withDesign]
}

const Template = (args) => <DropMenu {...args} />

export const Default = Template.bind({})
const menuItems = [
  { label: 'Change username', href: 'www.hpe.com' },
  { label: 'Reset Password', onClick: () => {} },
  { label: 'Logout', onClick: () => {} }
]

Default.args = {
  icon: <HelpOption />,
  position: { right: 'right', top: 'bottom' },
  items: menuItems,
  testId: 'default-drop-menu'
}
