import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { Default } from '../DropMenu.stories'

describe('TEST:drop-menu', () => {
  it('renders the drop menu as a type button', () => {
    render(<Default {...Default.args} />)
    expect(screen.getByTestId('default-drop-menu').getAttribute('type')).toBe(
      'button'
    )
  })
  it('click the menu icon will show the menu list', () => {
    render(<Default {...Default.args} />)
    fireEvent.click(screen.getByTestId('default-drop-menu'))
    expect(screen.getByTestId('default-drop-menu').hasChildNodes()).toBeTruthy()
  })
})
