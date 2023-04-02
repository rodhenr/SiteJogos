import { v4 as uuidv4 } from "uuid";

import { Avatar, Box, Tooltip, Typography } from "@mui/material";

import { IFriends } from "../../userInfoApiSlice";

import styles from "../../styles/ProfileModal.module.scss";

interface IProps {
  data: IFriends[];
}

function FriendList({ data }: IProps) {
  return (
    <Box
      className={styles.friendsContainer}
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      py={1}
    >
      <Typography
        sx={{
          color: "white",
          fontFamily: "Roboto Condensed",
          fontSize: "20px",
        }}
      >
        AMIGOS
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} gap={1}>
        {data.length === 0 && (
          <Typography color={"#6a6a84"} fontSize={"14px"} m={0}>
            Nenhum amigo para exibir
          </Typography>
        )}
        {data.map((friend) => {
          return (
            <Tooltip key={uuidv4()} title={friend["User.name"]}>
              <Avatar
                alt={"Avatar"}
                src={friend["User.avatar"]}
                sx={{
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  );
}

export default FriendList;
