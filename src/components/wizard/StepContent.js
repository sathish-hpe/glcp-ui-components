import React, { useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { PropTypes } from 'prop-types'

import { CCSForm } from '../form/Form'

import { WizardContext } from './WizardContext'
import { StepHeader } from './StepHeader'
import { StepFooter } from './StepFooter'

// Can be called by clicking the final button on the last step OR by hitting
// -Enter- on any intermediate step
const formSubmit = (
  formValues,
  setAttemptedAdvance,
  activeStep,
  setActiveStep,
  steps,
  actionOnSubmit
) => {
  if (steps[activeStep - 1].validateForm) {
    steps[activeStep - 1]
      .validateForm(formValues, steps[activeStep - 1].submitFormOnChange)
      .then(
        () => {
          // submit if successful
          setAttemptedAdvance(false)
          if (activeStep === steps.length) {
            actionOnSubmit(formValues)
          } else {
            setActiveStep(activeStep + 1)
          }
        },
        () => {
          // mark that the user is trying to advance, so that
          // validation will run on any errors in the future
          setAttemptedAdvance(true)
        }
      )
  } else {
    setAttemptedAdvance(false)
    if (activeStep === steps.length) {
      actionOnSubmit()
    } else {
      setActiveStep(activeStep + 1)
    }
  }
}

export const StepContent = ({ actionOnSubmit, buttonLabels }) => {
  const size = useContext(ResponsiveContext)
  const {
    formValues,
    setFormValues,
    formError,
    setAttemptedAdvance,
    activeStep,
    setActiveStep,
    steps,
    width
  } = useContext(WizardContext)
  return (
    <Box pad={{ top: 'large' }} flex={false}>
      {/* Set a medium gap on top but don't set more spacing on top or above the
          footer. Each step form is likely unique, so let each step add padding to
          match the UX as necessary. */}
      <Box
        width={width}
        gap="medium"
        pad={size === 'small' ? { horizontal: 'medium' } : 'xxsmall'}
      >
        <StepHeader />
        <CCSForm
          testId="wizard-form"
          value={formValues}
          errorMessage={formError}
          onChange={setFormValues}
          onSubmit={() => {
            formSubmit(
              formValues,
              setAttemptedAdvance,
              activeStep,
              setActiveStep,
              steps,
              actionOnSubmit
            )
          }}
          buttons={<StepFooter buttonLabels={buttonLabels} />}
        >
          {/* Index an array starting at 0 */}
          {steps[activeStep - 1].childComponents}
        </CCSForm>
      </Box>
    </Box>
  )
}

StepContent.propTypes = {
  actionOnSubmit: PropTypes.func.isRequired,
  buttonLabels: PropTypes.object
}

StepContent.defaultProps = {
  buttonLabels: undefined
}
