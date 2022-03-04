import { addons } from "@storybook/addons";

import SBTheme from "./sb-theme";

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: "right",
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: SBTheme,
  selectedPanel: undefined,
  initialActive: "sidebar",
  showRoots: true,
});
