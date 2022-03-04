import React from 'react'
import { render, screen } from '@testing-library/react'

import { Simple, Multiple } from '../FileInput.stories'

const defaultState = []
const setState = jest.fn(defaultState)
const useStateSpy = jest.spyOn(React, 'useState')
useStateSpy.mockImplementation((init) => [init, setState])

afterEach(() => {
  jest.clearAllMocks()
})

describe('TEST:file-input', () => {
  it('should render a label and a file input field for single file', () => {
    render(<Simple {...Simple.args} />)
    expect(screen.getByText('Drop file here or')).toBeInTheDocument()
    expect(screen.getByTestId('file-input-id')).toHaveAttribute(
      'label',
      'Single file input'
    )
  })

  it('should render a label and a file input field for multiple files', () => {
    render(<Multiple {...Multiple.args} />)
    expect(screen.getByText('Drop files here or')).toBeInTheDocument()
    expect(screen.getByTestId('file-input-multiple')).toHaveAttribute(
      'label',
      'Multiple file input'
    )
  })
})
