import React from 'react'

import { Pagination } from './Pagination'

export default {
  title: 'CCS/Pagination',
  component: Pagination
}

const Template = (args) => <Pagination {...args} />

export const Default = Template.bind({})

Default.args = {
  totalItems: 7,
  setPage: () => {},
  testId: 'pagination-object'
}

export const WithCustomItemsPerPage = Template.bind({})
WithCustomItemsPerPage.args = {
  totalItems: 65,
  itemsPerPage: 10,
  setPage: () => {},
  testId: 'pagination-object'
}

export const WithSelectedPage = Template.bind({})
WithSelectedPage.args = {
  totalItems: 12,
  page: 3,
  setPage: () => {},
  testId: 'pagination-object'
}

export const ShowPageIdxInfo = Template.bind({})
ShowPageIdxInfo.args = {
  totalItems: 12,
  page: 3,
  pageIdxInfo: 'Showing 11-12 of 12',
  setPage: () => {},
  testId: 'pagination-object'
}
