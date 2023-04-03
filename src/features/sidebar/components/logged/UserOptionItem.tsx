import { useDispatch } from "react-redux";
import {
  changeHistoryModal,
  changeProfileModal,
  changeMessagesModal,
} from "../../sidebarSlice";

import { Box, Typography } from "@mui/material";

interface IProps {
  Icon: any;
  title: string;
}

function SidebarOptionItem({ Icon, title }: IProps) {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (title === "Histórico") {
      dispatch(changeHistoryModal(true));
    } else if (title === "Meu Perfil") {
      dispatch(changeProfileModal(true));
    } else if (title === "Mensagens") {
      dispatch(changeMessagesModal(true));
    }
  };

  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      justifyContent={"center"}
      gap={1}
      px={0.25}
      py={"6px"}
      sx={{
        cursor: "pointer",
        ":hover": {
          backgroundColor: "#15171a",
          borderRadius: "5px",
          "& p, svg": {
            color: "#ff4c29",
          },
        },
      }}
      onClick={handleClick}
    >
      <Icon
        sx={{
          alignSelf: "center",
          color: "#FFF",
          fontSize: { mobile: "26px", laptop: "22px" },
        }}
      />
      <Typography
        color={"#FFF"}
        fontFamily={"'Montserrat', sans-serif"}
        fontSize={"16px"}
        m={0}
        sx={{
          fontSize: {
            mobile: "16px",
            desktopLarge: "18px",
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default SidebarOptionItem;
