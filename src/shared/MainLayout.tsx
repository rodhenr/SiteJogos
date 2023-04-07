import { useSelector } from "react-redux";

import { Box, Divider } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";

import { mainTheme } from "../utils/themes";
import TopMenu from "./components/TopMenu";
import ProfileModal from "../features/sidebar/components/profileModal/index";
import MessagesModal from "../features/sidebar/components/messages/MessagesModal";
import MatchesModal from "../features/sidebar/components/matchesModal/index";
import {
  selectHistoryState,
  selectMessagesState,
  selectProfileState,
} from "../features/sidebar/sidebarSlice";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

function MainLayout({ children }: IProps) {
  const historyState = useSelector(selectHistoryState);
  const profileState = useSelector(selectProfileState);
  const messagesState = useSelector(selectMessagesState);
  const theme = useTheme();

  return (
    <ThemeProvider theme={mainTheme}>
      <Box
        boxSizing={"border-box"}
        display={"flex"}
        flex={1}
        flexDirection={"column"}
        sx={{
          gap: { mobile: 2, laptop: 3 },
          p: { mobile: 2, laptop: 3 },
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
      {historyState && <MatchesModal />}
      {profileState && <ProfileModal />}
      {messagesState && <MessagesModal />}
    </ThemeProvider>
  );
}

export default MainLayout;
