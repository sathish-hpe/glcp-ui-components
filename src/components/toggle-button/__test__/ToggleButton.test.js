import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { Toggle } from '../ToggleButton.stories'

describe('ToggleButton', () => {
  it('render the ToggleButton', () => {
    render(<Toggle {...Toggle.args} />)
    const simple = screen.getByTestId('toggle-btn')
    expect(simple).toBeInTheDocument()

    fireEvent.click(simple)
    expect(simple).not.toBeChecked()

    fireEvent.click(simple)
    expect(simple).toBeChecked()
  })
})
