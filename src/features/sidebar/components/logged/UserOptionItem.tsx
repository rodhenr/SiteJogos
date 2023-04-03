import { useDispatch } from "react-redux";
import {
  changeHistoryModal,
  changeProfileModal,
  changeMessagesModal,
} from "../../sidebarSlice";

import { Box, Typography } from "@mui/material";

import styles from "../../styles/SidebarUserOptionsItem.module.scss";

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
      sx={{ cursor: "pointer" }}
      className={styles.container}
      onClick={handleClick}
    >
      <Icon
        sx={{
          alignSelf: "center",
          color: "#FFF",
          fontSize: "26px",
        }}
      />
      <Typography
        color={"#FFF"}
        fontFamily={"'Montserrat', sans-serif"}
        fontSize={"16px"}
        m={0}
        className={styles.title}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default SidebarOptionItem;
