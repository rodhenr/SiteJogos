import { Avatar, Box, Typography } from "@mui/material";

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
      justifyContent={"space-between"}
    >
      <Box
        alignItems={"center"}
        color={"#FFF"}
        display={"flex"}
        flexDirection={"column"}
        sx={{ gap: 1 }}
      >
        <Typography
          color={"info.main"}
          fontSize={"25px"}
          fontWeight={600}
          width={"100%"}
        >
          RANKING #{position}
        </Typography>
        <Box display={"flex"} mt={2} sx={{ gap: { tablet: 2, laptop: 1 } }}>
          <Avatar
            alt="User Avatar"
            src={avatar}
            sx={{
              height: { mobile: "60px", laptop: "70px" },
              width: { mobile: "60px", laptop: "70px" },
            }}
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
