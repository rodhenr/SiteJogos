import { Avatar, Box, Typography } from "@mui/material";

import styles from "../../styles/ProfileModal.module.scss";

interface IProps {
  avatar: string;
  id: number;
  name: string;
  position: number;
}

function UserInfoModal({ avatar, id, name, position }: IProps) {
  return (
    <Box
      display={"flex"}
      fontFamily={"Roboto Condensed"}
      justifyContent={"space-between"}
    >
      <Box
        alignItems={"center"}
        color={"#6A6A84"}
        display={"flex"}
        flexDirection={"column"}
        sx={{ gap: 1 }}
      >
        <Typography
          color={"#ff4c29"}
          fontSize={"25px"}
          fontWeight={600}
          width={"100%"}
        >
          RANKING #{position}
        </Typography>
        <Box
          className={styles.userInfoContainer}
          display={"flex"}
          gap={2}
          mt={2}
        >
          <Avatar
            alt="User Avatar"
            className={styles.avatar}
            src={avatar}
            sx={{ height: "60px !important", width: "60px !important" }}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography color="#FFF" fontSize={"22px"}>
              {name.toUpperCase()}
            </Typography>
            <Typography color="#FFF" fontSize={"13px"}>
              ID: {id}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default UserInfoModal;
