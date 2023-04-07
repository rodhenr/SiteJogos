import { Box, Divider } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";

import { mainTheme } from "../utils/themes";
import TopMenu from "./components/TopMenu";
import Sidebar from "../features/sidebar/index";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

function MainLayout({ children }: IProps) {
  const theme = useTheme();

  return (
    <ThemeProvider theme={mainTheme}>
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
        <Divider color={theme.palette.primary.main} sx={{ opacity: 0.2 }} />
        <Box
          flex={1}
          sx={{
            display: { laptop: "flex" },
            flexDirection: { mobile: "row", laptop: "column" },
            gap: { mobile: 1, laptop: 2 },
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MainLayout;
