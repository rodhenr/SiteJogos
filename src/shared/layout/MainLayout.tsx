import { useSelector } from "react-redux";

import { Box, Divider } from "@mui/material";

import TopMenu from "../components/menu/TopMenu";
import ProfileModal from "../components/userInfo/ProfileModal";
import { selectProfileState } from "../modalSlice";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

function MainLayout({ children }: IProps) {
  const profileState = useSelector(selectProfileState);

  return (
    <Box
      boxSizing={"border-box"}
      display={"flex"}
      flex={1}
      flexDirection={"column"}
      minHeight={"100%"}
      sx={{
        gap: { mobile: 2, laptop: 3 },
        height: { mobile: "100%", laptop: "100vh" },
        p: { mobile: 2, laptop: 3 },
      }}
    >
      <TopMenu />
      <Divider sx={{ bgcolor: "info.main", opacity: 0.75 }} />
      <Box
        boxSizing={"border-box"}
        height={"100%"}
        minHeight={0}
        sx={{
          display: { laptop: "flex" },
          flex: { laptop: 1 },
          flexDirection: { mobile: "row", laptop: "column" },
          gap: { mobile: 1, laptop: 2 },
        }}
      >
        {children}
      </Box>
      {profileState && <ProfileModal />}
    </Box>
  );
}

export default MainLayout;
