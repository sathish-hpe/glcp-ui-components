import React from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'

import {
  TopStatusGood,
  TopStatusWarning,
  TopStatusUnknown,
  BottomStatusCritical,
  NoIcon
} from '../Notification.stories'

describe('Notification', () => {
  it('renders a status good notification', () => {
    render(<TopStatusGood {...TopStatusGood.args} />)

    const mainBtn = screen.getByTestId('main-btn')
    expect(mainBtn).toBeInTheDocument()
    fireEvent.click(mainBtn)

    const notification = screen.getByTestId('status-good-notification')
    expect(
      within(notification).getByTestId('notification-text')
    ).toHaveTextContent(/This is a notifcation/i)

    expect(within(notification).getByTestId('close-button')).toBeInTheDocument()

    expect(
      within(notification).getByLabelText('StatusGood')
    ).toBeInTheDocument()
  })

  it('renders a status critical notification', () => {
    render(<BottomStatusCritical {...BottomStatusCritical.args} />)

    const mainBtn = screen.getByTestId('main-btn')
    expect(mainBtn).toBeInTheDocument()
    fireEvent.click(mainBtn)

    const notification = screen.getByTestId('status-critical-notification')
    expect(
      within(notification).getByTestId('notification-text')
    ).toHaveTextContent(/This is a critical notifcation/i)

    expect(within(notification).getByTestId('close-button')).toBeInTheDocument()

    expect(
      within(notification).getByLabelText('StatusCritical')
    ).toBeInTheDocument()
  })

  it('renders a status warning notification', () => {
    render(<TopStatusWarning {...TopStatusWarning.args} />)

    const mainBtn = screen.getByTestId('main-btn')
    expect(mainBtn).toBeInTheDocument()
    fireEvent.click(mainBtn)

    const notification = screen.getByTestId('status-warning-notification')
    expect(
      within(notification).getByTestId('notification-text')
    ).toHaveTextContent(/This is a warning notifcation/i)

    expect(within(notification).getByTestId('close-button')).toBeInTheDocument()

    expect(
      within(notification).getByLabelText('StatusWarning')
    ).toBeInTheDocument()
  })

  it('renders a status unknown type notification', () => {
    render(<TopStatusUnknown {...TopStatusUnknown.args} />)

    const mainBtn = screen.getByTestId('main-btn')
    expect(mainBtn).toBeInTheDocument()
    fireEvent.click(mainBtn)

    const notification = screen.getByTestId('status-unknown-notification')
    expect(
      within(notification).getByTestId('notification-text')
    ).toHaveTextContent(/This is a unknown type notifcation/i)

    expect(within(notification).getByTestId('close-button')).toBeInTheDocument()

    expect(
      within(notification).getByLabelText('StatusUnknown')
    ).toBeInTheDocument()
  })

  it('renders a no icon notification', () => {
    render(<NoIcon {...NoIcon.args} />)

    const mainBtn = screen.getByTestId('main-btn')
    expect(mainBtn).toBeInTheDocument()
    fireEvent.click(mainBtn)

    const notification = screen.getByTestId('no-icon-notification')
    expect(
      within(notification).getByTestId('notification-text')
    ).toHaveTextContent(/This is a no icon notifcation/i)

    expect(within(notification).getByTestId('close-button')).toBeInTheDocument()

    expect(within(notification).queryByLabelText(/Status/i)).toBeNull()
  })
})
