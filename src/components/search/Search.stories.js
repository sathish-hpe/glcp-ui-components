import React from 'react'

import { Search } from './Search'

export default {
  title: 'CCS/Search',
  component: Search
}

const Template = (args) => <Search {...args} />

export const Default = Template.bind({})
Default.args = {
  testId: 'search-field',
  handleCustomSearch: () => {}
}

export const WithPropsData = Template.bind({})
WithPropsData.args = {
  testId: 'search-field',
  placeholder: 'Search Names',
  width: 'large',
  handleCustomSearch: () => {}
}

export const WithInitSearchData = Template.bind({})
WithInitSearchData.args = {
  testId: 'search-field',
  initValue: 'John',
  handleCustomSearch: () => {}
}
