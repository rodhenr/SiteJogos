import { v4 as uuidv4 } from "uuid";

import { Avatar, Box, Tooltip, Typography } from "@mui/material";

import { IFriends } from "../../userInfoApiSlice";

interface IProps {
  data: IFriends[];
}

function FriendList({ data }: IProps) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      py={1}
      sx={{ flex: { laptop: 1 } }}
      width={"100%"}
    >
      <Typography
        sx={{
          color: "tertiary.main",
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
        {data.slice(0, 20).map((friend) => {
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
        {data.length > 20 && (
          <Box sx={{ position: "relative" }}>
            <Typography
              color={"info.main"}
              sx={{
                fontWeight: "bold",
                left: "50%",
                position: "absolute",
                textShadow:
                  "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
                top: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,

                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              +{data.length - 20}
            </Typography>
            <Avatar
              alt={"Avatar"}
              src={""}
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default FriendList;
