import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Note } from 'grommet-icons'

import { Basic, BackgroundButton, IconClick } from '../Card.stories'

/* TODO: CCS-1055 - replace localStorage */
afterEach(() => {
  window.localStorage.removeItem('card-clicked')
})

it('renders a basic card', () => {
  render(<Basic {...Basic.args} />)
  expect(screen.getByTestId('text-cardBody-title')).toHaveTextContent('Admins')
  expect(screen.getByTestId('text-cardBody-summary')).toHaveTextContent(
    'Find list of administrators in the system'
  )
})

it('renders a card with background set, icon and link', () => {
  render(<BackgroundButton {...BackgroundButton.args} />)
  expect(screen.getByTestId('text-cardBody-title')).toHaveTextContent(
    'Aruba Application'
  )
  expect(screen.getByTestId('text-cardBody-summary')).toHaveTextContent(
    'Configure settings for the Aruba app in this location'
  )
})

it('renders a clickable card with icon', () => {
  IconClick.args = {
    cardWidth: 'small',
    icon: <Note size="medium" />,
    title: 'Clickable card',
    description:
      'Define a function for onClick so this card is clickable with a resulting action',
    testId: 'cardBody',
    onClick: () => {
      localStorage.setItem('card-clicked', 'yes')
    }
  }
  render(<IconClick {...IconClick.args} />)
  fireEvent.click(screen.getByTestId('text-cardBody-title'))
  expect(window.localStorage.getItem('card-clicked')).toBe('yes')
})
