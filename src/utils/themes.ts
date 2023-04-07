import createTheme from "@mui/material/styles/createTheme";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    laptop: true;
    tablet: true;
    desktop: true;
    desktopLarge: true;
  }
}

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#0A2647",
    },
    secondary: {
      main: "#144272",
    },
    info: {
      main: "#205295",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 600,
      laptop: 1024,
      desktop: 1200,
      desktopLarge: 1400,
    },
  },
});
