import React from 'react'

import { Logo } from './Logo'

export default {
  title: 'CCS/Logo',
  component: Logo
}

const Template = (args) => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'small',
  url: '/images/aruba.png',
  testId: 'logo-default',
  onClick: null
}
export const ClearPass = Template.bind({})
ClearPass.args = {
  size: 'small',
  testId: 'logo-cp',
  url: '/images/clearpass.png'
}
export const ClearPassMedium = Template.bind({})
ClearPassMedium.args = {
  size: 'medium',
  testId: 'logo-cp-medium',
  url: '/images/compliance.png'
}
export const NoShade = Template.bind({})
NoShade.args = {
  size: 'medium',
  noShade: true,
  testId: 'logo-cp-medium',
  url: '/images/AT&T.svg'
}
