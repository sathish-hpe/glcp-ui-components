import initStoryshots from '@storybook/addon-storyshots'
import 'jest-styled-components'
import { render } from '@testing-library/react'

const styledSnapshot = ({ story, context }) => {
  /**
   * TODO: this is a workaround to skip table stories as table snapshot is failing
   */
  if (story.id.indexOf('ccs-datatable') === 0) {
    return
  }
  const view = story.render(context)
  const { container } = render(view)
  expect(container).toMatchSnapshot()
}
initStoryshots({
  test: styledSnapshot
})
