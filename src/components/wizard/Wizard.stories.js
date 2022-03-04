import React from 'react'

import { Wizard } from './Wizard'
import {
  basicSteps,
  basicLargeSteps,
  userDetailsDefaults,
  orderInfoDefaults,
  summaryInfoDefaults,
  cancelStringObject,
  validationWizardSteps,
  scrollDefaultValues,
  scrollSteps
} from './__data__/wizardData'

export default {
  title: 'CCS/Wizard',
  component: Wizard
}

const Template = (args) => <Wizard {...args} />

// Basic Wizard with Function Description

export const BasicFunctionDescription = Template.bind({})
BasicFunctionDescription.args = {
  title: 'Wizard title',
  formDefaultValues: {},
  steps: basicSteps,
  actionOnExit: () => {},
  actionOnSubmit: () => {},
  testId: ''
}

// Basic Large Wizard

export const BasicLarge = Template.bind({})
BasicLarge.args = {
  title: 'Large Wizard title',
  formDefaultValues: {},
  steps: basicLargeSteps,
  actionOnExit: () => {},
  actionOnSubmit: () => {},
  testId: ''
}

// Basic Large Wizard Different Finish Label

export const BasicLargeFinishLabel = Template.bind({})
BasicLargeFinishLabel.args = {
  title: 'Large Wizard title',
  formDefaultValues: {},
  steps: basicLargeSteps,
  actionOnExit: () => {},
  actionOnSubmit: () => {},
  testId: '',
  buttonLabels: { finish: 'Complete' }
}

// With Validation Saved Values

export const WithValidationSavedValues = Template.bind({})
WithValidationSavedValues.args = {
  title: 'Validation Example',
  formDefaultValues: {
    ...userDetailsDefaults,
    ...orderInfoDefaults,
    ...summaryInfoDefaults
  },
  steps: validationWizardSteps,
  actionOnExit: () => {},
  actionOnSubmit: () => {},
  cancelStrings: cancelStringObject,
  testId: ''
}

// Scroll

export const Scroll = Template.bind({})
Scroll.args = {
  title: 'Scrolling',
  formDefaultValues: scrollDefaultValues,
  steps: scrollSteps,
  actionOnExit: () => {},
  actionOnSubmit: () => {},
  cancelStrings: cancelStringObject,
  testId: ''
}
