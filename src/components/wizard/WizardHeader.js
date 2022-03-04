import React, { useContext } from 'react'
import { Box, Header } from 'grommet'
import { FormPreviousLink, FormClose } from 'grommet-icons'
import { PropTypes } from 'prop-types'

import { Typography } from '../typography/Typography'
import { Button } from '../button/Button'

import { WizardContext } from './WizardContext'

export const WizardHeader = ({ buttonLabels, setCancelLayerOpen }) => {
  const { setAttemptedAdvance, activeStep, setActiveStep, steps, title } =
    useContext(WizardContext)
  return (
    <Header
      background="background-contrast"
      pad={{ horizontal: 'medium' }}
      fill="horizontal"
      justify="center"
    >
      <Box direction="row" flex>
        {activeStep > 1 && !steps[activeStep - 1].disableBack && (
          <Button
            label={activeStep > 1 ? steps[activeStep - 2].title : ''}
            testId="button-header-previous"
            icon={<FormPreviousLink color="text-strong" />}
            onClick={() => {
              setActiveStep(activeStep - 1)
              setAttemptedAdvance(false)
            }}
          />
        )}
      </Box>
      <Box pad={{ vertical: 'medium' }}>
        <Typography
          type="text"
          color="text-strong"
          weight="bold"
          size="medium"
          testId="wizard-header"
        >
          {title}
        </Typography>
      </Box>
      {/* use vertical pad on this Box to extend overall height of header */}
      <Box direction="row" flex justify="end">
        <Button
          label={
            (buttonLabels &&
              buttonLabels.cancel &&
              buttonLabels.cancel.label) ||
            'Cancel'
          }
          testId="button-header-cancel"
          icon={<FormClose color="text-strong" />}
          reverse
          onClick={() => {
            setCancelLayerOpen(true)
          }}
        />
      </Box>
    </Header>
  )
}

WizardHeader.propTypes = {
  setCancelLayerOpen: PropTypes.func.isRequired,
  buttonLabels: PropTypes.shape({
    cancel: PropTypes.string
  })
}

WizardHeader.defaultProps = {
  buttonLabels: undefined
}
