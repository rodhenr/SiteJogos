import { Box, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { breakpointsTheme } from "../utils/themes";

import TopMenu from "./components/TopMenu";

interface IProps {
  children: JSX.Element | JSX.Element[];
}
function MainLayout({ children }: IProps) {
  const theme = createTheme(breakpointsTheme);

  return (
    <ThemeProvider theme={theme}>
      <Box
        boxSizing={"border-box"}
        display={"flex"}
        flex={1}
        flexDirection={"column"}
        height={"100vh"}
        sx={{
          gap: { mobile: 2, laptop: 3 },
          py: { mobile: 2, laptop: 3 },
          px: { mobile: 2, laptop: 3 },
        }}
      >
        <TopMenu />
        <Divider color={"#a8a8a8"} sx={{ opacity: 0.2 }} />
        <Box
          flex={1}
          sx={{
            display: { laptop: "flex" },
            flexDirection: { mobile: "row", laptop: "column" },
            gap: { mobile: "8px", laptop: "16px" },
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MainLayout;
