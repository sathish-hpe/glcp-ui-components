import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { Default, WithPropsData, WithInitSearchData } from '../Search.stories'

it('renders the Default Search', () => {
  render(<Default {...Default.args} />)
  const searchField = screen.getByTestId('search-field')
  const search = jest.fn()
  render(searchField.addEventListener('change', search))
  fireEvent.change(searchField, { target: { value: 'M' } })
  expect(search).toHaveBeenCalled()
  expect(screen.getByTestId('search-field')).toHaveValue('M')
})

it('renders the WithPropsData Search', () => {
  render(<WithPropsData {...WithPropsData.args} />)
  expect(screen.getByTestId('search-field')).toBeTruthy()
  const inputNode = screen.getByPlaceholderText('Search Names')
  expect(inputNode).toBeTruthy()
})

it('renders the WithInitSearchData Search', () => {
  render(<WithInitSearchData {...WithInitSearchData.args} />)
  expect(screen.getByTestId('search-field')).toBeTruthy()
  expect(screen.getByTestId('search-field')).toHaveValue('John')
})
