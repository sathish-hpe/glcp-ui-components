import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {
  WithHeaderAndFooter,
  WithoutHeaderAndFooter
} from '../CommonLayout.stories'

it('renders the page footer on screen', () => {
  const footerText = (
    <span>&copy; 2021 Hewlett Packard Enterprise Development LP</span>
  )

  render(<WithHeaderAndFooter {...WithHeaderAndFooter.args} />)
  expect(screen.getByTestId('app-footer')).toHaveTextContent(
    footerText.props.children
  )
})

it('does not render the page footer on screen', () => {
  render(<WithoutHeaderAndFooter {...WithoutHeaderAndFooter.args} />)
  expect(screen.queryByText('app-footer')).not.toBeInTheDocument()
})
