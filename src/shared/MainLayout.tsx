import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { breakpointsTheme } from "../utils/themes";

import Menu from "./components/Menu";
import Sidebar from "../features/sidebar/index";

interface IProps {
  children: JSX.Element | JSX.Element[];
}
function MainLayout({ children }: IProps) {
  const theme = createTheme(breakpointsTheme);

  return (
    <ThemeProvider theme={theme}>
      <Box
        display={"flex"}
        height={"100vh"}
        sx={{
          flexDirection: { mobile: "column", laptop: "row" },
          mb: { mobile: 8, laptop: 0 },
        }}
        width={"100%"}
      >
        <Sidebar />
        <Box
          boxSizing={"border-box"}
          display={"flex"}
          flex={"1"}
          flexDirection={"column"}
          height={"100vh"}
          sx={{
            gap: { mobile: 2, laptop: 4 },
            py: { mobile: 2, laptop: 3 },
            px: { mobile: 2, laptop: 4 },
          }}
        >
          <Menu />
          <Box
            flex={1}
            sx={{
              display: { laptop: "flex" },
              flexDirection: { mobile: "row", laptop: "column" },
              gap: { mobile: "8px", laptop: "16px" },
              maxHeight: { desktop: "calc(100% - 100px)" },
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MainLayout;
