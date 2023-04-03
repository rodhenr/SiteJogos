import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import Mail from "@mui/icons-material/Mail";

import SidebarUserOptionItem from "./UserOptionItem";

import { Box, Typography } from "@mui/material";

function SidebarUserOptions() {
  return (
    <Box
      alignItems={"flex-start"}
      display={"flex"}
      flexDirection={"column"}
      mt={2}
    >
      <Typography
        color={"#6a6a84"}
        fontFamily={"'Nunito', sans-serif"}
        fontSize={"12px"}
        m={0}
        sx={{
          fontSize: { mobile: "12px", laptop: "13px", desktopLarge: "14px" },
          fontWeight: { laptop: 600 },
        }}
      >
        MENU
      </Typography>
      <Box
        alignItems={"flex-start"}
        display={"flex"}
        flexDirection={"column"}
        gap={0.25}
        mt={2}
        width={"100%"}
      >
        <SidebarUserOptionItem Icon={AccountCircleIcon} title={"Meu Perfil"} />
        <SidebarUserOptionItem Icon={HistoryIcon} title={"Histórico"} />
        <SidebarUserOptionItem Icon={Mail} title={"Mensagens"} />
      </Box>
    </Box>
  );
}

export default SidebarUserOptions;
