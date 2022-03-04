import React, { useContext } from 'react'
import { Box } from 'grommet'
import { FormNextLink } from 'grommet-icons'
import { PropTypes } from 'prop-types'

import { Button } from '../button/Button'

import { WizardContext } from './WizardContext'

export const StepFooter = ({ buttonLabels }) => {
  const { formValues, setAttemptedAdvance, activeStep, setActiveStep, steps } =
    useContext(WizardContext)
  return (
    <Box
      border={{ side: 'top', color: 'border' }}
      pad={{ top: 'medium' }}
      direction="row"
      justify="end"
      gap="small"
      align="end"
    >
      {buttonLabels &&
        buttonLabels.otherActions &&
        buttonLabels.otherActions.showInStep === activeStep && (
          <Button
            label={
              buttonLabels && buttonLabels.otherActions
                ? buttonLabels.otherActions.label
                : 'Help'
            }
            testId="button-other-actions"
            default
            type="button"
            onClick={buttonLabels.otherActions.handleOnClick}
          />
        )}
      {activeStep < steps.length && (
        <Button
          label={
            (buttonLabels &&
              buttonLabels.next &&
              buttonLabels.next.label &&
              buttonLabels.next.label) ||
            'Next'
          }
          testId="button-next"
          icon={<FormNextLink />}
          primary
          reverse
          onClick={() => {
            // check for errors
            steps[activeStep - 1]
              .validateForm(
                formValues,
                buttonLabels &&
                  buttonLabels.next &&
                  buttonLabels.next.submitForm
                  ? buttonLabels.next.submitForm
                  : false
              )
              .then(
                () => {
                  // advance to next step if successful
                  setAttemptedAdvance(false)
                  setActiveStep(activeStep + 1)
                },
                () => {
                  // mark that the user is trying to advance, so that
                  // validation will run on any errors in the future
                  setAttemptedAdvance(true)
                }
              )
          }}
        />
      )}
      {activeStep === steps.length && (
        <Button
          label={
            buttonLabels && buttonLabels.finish ? buttonLabels.finish : 'Finish'
          }
          testId="button-finish"
          primary
          type="submit"
        />
      )}
    </Box>
  )
}

StepFooter.propTypes = {
  buttonLabels: PropTypes.shape({
    next: PropTypes.shape({
      label: PropTypes.string,
      submitForm: PropTypes.bool
    }),
    finish: PropTypes.string,
    otherActions: PropTypes.shape({
      showInStep: PropTypes.number,
      label: PropTypes.string,
      handleOnClick: PropTypes.func
    })
  })
}

StepFooter.defaultProps = {
  buttonLabels: undefined
}
