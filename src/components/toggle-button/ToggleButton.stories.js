/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react'

import { ToggleButton } from './ToggleButton'

export default {
  title: 'CCS/ToggleButton',
  component: ToggleButton
}

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked)
  return (
    <>
      <ToggleButton
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked)
        }}
      />
    </>
  )
}

export const Toggle = Template.bind({})
Toggle.args = {
  label: 'Choice of device',
  onChange: () => {},
  checked: true,
  testId: 'toggle-btn'
}

Toggle.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KGfphc2fWsEF8GpRC9vKbS/CCS-v0.1?node-id=17467%3A56881'
  }
}
