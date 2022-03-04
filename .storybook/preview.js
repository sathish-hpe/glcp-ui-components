// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }
import React from "react";
import { Grommet } from "grommet";
// import { grommet } from 'grommet/themes'
import { hpe } from "grommet-theme-hpe";
// import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // TODO: uncomment this if we need dark theme for the doc
  // docs: {
  //   theme: themes.dark
  // }
};
export const decorators = [
  (Story) => (
    <Grommet theme={hpe}>
      <Story />
    </Grommet>
  ),
];
