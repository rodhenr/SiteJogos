import { ThemeOptions } from "@mui/material/styles/createTheme";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    laptop: true;
    tablet: true;
    desktop: true;
    desktopLarge: true;
  }
}

export const breakpointsTheme: ThemeOptions = {
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 600,
      laptop: 1024,
      desktop: 1200,
      desktopLarge: 1400,
    },
  },
};
