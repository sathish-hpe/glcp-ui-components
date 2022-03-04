import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { AccountList, AppList, ClickableAccountListCard } from '../Tile.stories'
import { Logo } from '../../logo/Logo'
import { Typography } from '../../typography/Typography'

afterEach(() => {
  window.localStorage.removeItem('tile-clicked')
})
it('renders the account list with the given logo and title', () => {
  AccountList.args = {
    logo: (
      <Logo
        onClick={null}
        param={null}
        size="small"
        url="/images/acme.png"
        testId="logo-test"
      />
    ),
    title: (
      <Typography size="small" testId="tile-title" type="text" weight="bold">
        ACME
      </Typography>
    ),
    subTitle: (
      <Typography color="gray" size="xsmall" testId="tile-subtitle" type="text">
        ACME Corporations
      </Typography>
    ),
    layout: 'row',
    boxShadow: true,
    testId: 'account-list'
  }
  render(<AccountList {...AccountList.args} />)
  fireEvent.click(screen.getByTestId('tile-account-list'))
  expect(screen.getByTestId('account-list')).toHaveTextContent(
    'ACME Corporations'
  )
})
it('renders the account list with onclicktile event', () => {
  AccountList.args = {
    logo: (
      <Logo
        onClick={null}
        param={null}
        size="small"
        url="/images/acme.png"
        testId="logo-test"
      />
    ),
    title: (
      <Typography size="small" testId="tile-title" type="text" weight="bold">
        ACME
      </Typography>
    ),
    subTitle: (
      <Typography color="gray" size="xsmall" testId="tile-subtitle" type="text">
        ACME Corporations
      </Typography>
    ),
    layout: 'row',
    boxShadow: true,
    onClickTile: () => {
      localStorage.setItem('tile-clicked', 'yes')
    },
    testId: 'account-list-click'
  }
  render(<AccountList {...AccountList.args} />)
  fireEvent.click(screen.getByTestId('tile-info-account-list-click'))
  expect(window.localStorage.getItem('tile-clicked')).toBe('yes')
})
it('renders the account list with onclicktile event with param', () => {
  AccountList.args = {
    logo: (
      <Logo
        onClick={null}
        param={null}
        size="small"
        url="/images/acme.png"
        testId="logo-test"
      />
    ),
    title: (
      <Typography size="small" testId="tile-title" type="text" weight="bold">
        ACME
      </Typography>
    ),
    subTitle: (
      <Typography color="gray" size="xsmall" testId="tile-subtitle" type="text">
        ACME Corporations
      </Typography>
    ),
    layout: 'row',
    boxShadow: true,
    onClickTile: (param) => {
      localStorage.setItem('tile-clicked', param.test)
    },
    paramTile: { test: 'param1' },
    testId: 'account-list-click'
  }
  render(<AccountList {...AccountList.args} />)
  fireEvent.click(screen.getByTestId('tile-info-account-list-click'))
  expect(window.localStorage.getItem('tile-clicked')).toBe('param1')
})
it('renders the app list with column layout', () => {
  AppList.args = {
    logo: (
      <Logo
        onClick={null}
        param={null}
        size="small"
        url="/images/aruba.png"
        testId="logo-test"
      />
    ),
    title: (
      <Typography size="small" testId="tile-title" type="text" weight="bold">
        ACME
      </Typography>
    ),
    subTitle: (
      <Typography color="gray" size="xsmall" testId="tile-subtitle" type="text">
        ACME Corporations
      </Typography>
    ),
    layout: 'column',
    boxShadow: false,
    onClickTile: () => {
      localStorage.setItem('tile-clicked', 'yes')
    },
    testId: 'app-list'
  }
  render(<AppList {...AppList.args} />)
  expect(screen.getByTestId(`tile-title`)).toHaveTextContent('ACME')
  expect(screen.getByTestId(`tile-subtitle`)).toHaveTextContent(
    'ACME Corporations'
  )
  fireEvent.click(screen.getByTestId('tile-info-app-list'))
  expect(window.localStorage.getItem('tile-clicked')).toBe('yes')
})
it('renders the account list with onclickCard event', () => {
  ClickableAccountListCard.args = {
    logo: (
      <Logo
        onClick={null}
        param={null}
        size="small"
        url="/images/acme.png"
        testId="logo-test"
      />
    ),
    title: (
      <Typography size="small" testId="tile-title" type="text" weight="bold">
        ACME
      </Typography>
    ),
    subTitle: (
      <Typography color="gray" size="xsmall" testId="tile-subtitle" type="text">
        ACME Corporations
      </Typography>
    ),
    layout: 'row',
    boxShadow: true,
    onClickCard: () => {
      localStorage.setItem('card-clicked', 'yes')
    },
    testId: 'account-card-click'
  }
  render(<ClickableAccountListCard {...ClickableAccountListCard.args} />)
  fireEvent.click(screen.getByTestId('tile-account-card-click'))
  expect(window.localStorage.getItem('card-clicked')).toBe('yes')
})
