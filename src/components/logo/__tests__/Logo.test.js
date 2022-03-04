import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { Default } from '../Logo.stories'

afterEach(() => {
  window.localStorage.removeItem('logo-clicked')
})
it('renders the logo with the tabindex', () => {
  Default.args = {
    size: 'small',
    url: '/images/aruba.png',
    testId: 'logo-default'
  }
  render(<Default {...Default.args} />)
  fireEvent.click(screen.getByTestId('logo-default'))
  expect(screen.getByTestId('logo-default')).toHaveAttribute('tabindex')
})
it('renders the logo with the onclick', () => {
  Default.args = {
    size: 'small',
    url: '/images/aruba.png',
    onClick: () => {
      localStorage.setItem('logo-clicked', 'yes')
    },
    testId: 'logo-default-click'
  }
  render(<Default {...Default.args} />)
  fireEvent.click(screen.getByTestId('logo-default-click'))

  expect(window.localStorage.getItem('logo-clicked')).toBe('yes')
})
it('renders the logo with the onclick with param', () => {
  Default.args = {
    size: 'small',
    url: '/images/aruba.png',
    onClick: (param) => {
      localStorage.setItem('logo-clicked', param.test)
    },
    param: { test: 'param1' },
    testId: 'logo-default-click'
  }
  render(<Default {...Default.args} />)
  fireEvent.click(screen.getByTestId('logo-default-click'))
  expect(window.localStorage.getItem('logo-clicked')).toBe('param1')
})
