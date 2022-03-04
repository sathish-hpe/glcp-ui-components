import React from 'react'
import { render, screen } from '@testing-library/react'

import { FormWithoutError, FormWithError } from '../Form.stories'
import { Button } from '../../button/Button'

it('renders form without an error message', () => {
  FormWithoutError.args = {
    errorMessage: '',
    testId: 'without-error',
    buttons: (
      <>
        <Button
          primary
          type="submit"
          label="Sign Up"
          fill="horizontal"
          size="large"
          margin={{ top: 'medium' }}
          testId="sign-up-submit"
        />
      </>
    )
  }
  render(<FormWithoutError {...FormWithoutError.args} />)
  expect(screen.queryByTestId('form-global-error')).toBeNull()
})

it('renders form with an error message', () => {
  FormWithError.args = {
    errorMessage: 'error message',
    testId: 'with-error',
    buttons: (
      <>
        <Button
          primary
          type="submit"
          label="Sign Up"
          fill="horizontal"
          size="large"
          margin={{ top: 'medium' }}
          testId="sign-up-submit"
        />
      </>
    )
  }

  render(<FormWithError {...FormWithError.args} />)
  expect(
    screen.getByTestId('text-form-global-error-message')
  ).toHaveTextContent('error message')
})
