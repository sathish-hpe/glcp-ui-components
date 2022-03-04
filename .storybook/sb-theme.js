import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "#17EBA0",
  colorSecondary: "#008567",

  // UI
  appBg: "#263040",
  appContentBg: "#FFFFFF",
  appBorderColor: "#7887A1",
  appBorderRadius: 4,

  // Typography
  fontBase: "'Metric', Arial, sans-serif",
  fontCode: "monospace",

  // Text colors
  textColor: "#17EBA0",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "#FFFFFF",
  barSelectedColor: "#17EBA0",
  barBg: "#404B5C",

  // Form colors
  inputBg: "white",
  inputBorder: "#7887A1",
  inputTextColor: "#17EBA0",
  inputBorderRadius: 4,

  brandTitle: "CCS Storybook",
  brandUrl: "https://hpe.com",
  brandImage:
    "https://raw.githubusercontent.com/hpe-design/logos/master/HPE%20Element%20-%20PNG/hpe-element-color.png",
});
