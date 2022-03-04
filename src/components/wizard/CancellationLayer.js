import React, { useContext } from 'react'
import { Box, Layer } from 'grommet'
import { PropTypes } from 'prop-types'

import { Typography } from '../typography/Typography'
import { Button } from '../button/Button'

import { WizardContext } from './WizardContext'

const defaultStringObject = {
  heading: 'Cancel',
  text: 'Cancelling setup will lose all of your progress. Are you sure you want to exit the setup?',
  continueLabel: 'No, continue setup',
  exitLabel: 'Yes, cancel setup'
}

// TODO CCS-4097: Could we use ModalDialog here?
export const CancellationLayer = ({ onSetOpen, onClickExit, strings }) => {
  const { title } = useContext(WizardContext)
  return (
    <Layer
      position="center"
      onClickOutside={() => onSetOpen(false)}
      onEsc={() => onSetOpen(false)}
    >
      <Box pad="large" gap="small" width="large">
        <Box>
          <Typography
            type="heading"
            size="medium"
            testId="cancel-heading"
            color="text-strong"
          >
            {strings.heading}
          </Typography>
          <Typography
            type="text"
            size="medium"
            testId="cancel-title"
            color="text-strong"
          >
            {title}
          </Typography>
        </Box>
        <Typography
          type="text"
          size="medium"
          testId="cancel-text"
          color="text-strong"
        >
          {strings.text}
        </Typography>
        <Box
          as="footer"
          gap="small"
          direction="row"
          align="center"
          justify="end"
          pad={{ top: 'medium', bottom: 'small' }}
        >
          <Button
            label={strings.continueLabel}
            testId="button-cancel-continue"
            onClick={() => onSetOpen(false)}
            secondary
          />
          <Button
            testId="button-cancel-exit"
            label={strings.exitLabel}
            onClick={onClickExit}
            primary
          />
        </Box>
      </Box>
    </Layer>
  )
}

CancellationLayer.propTypes = {
  onSetOpen: PropTypes.func.isRequired,
  onClickExit: PropTypes.func.isRequired,
  strings: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    continueLabel: PropTypes.string.isRequired,
    exitLabel: PropTypes.string.isRequired
  })
}

CancellationLayer.defaultProps = {
  strings: defaultStringObject
}
