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

  interface Palette {
    tertiary: Palette["primary"];
  }

  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
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
    tertiary: {
      dark: "#9C241D",
      light: "#eb726b",
      main: "#C3423F",
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
