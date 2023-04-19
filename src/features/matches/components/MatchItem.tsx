import { Box, Typography } from "@mui/material";

import { formatDateWithTime } from "../../../utils/formatDate";

interface IProps {
  time: Date;
  game: string;
  user: string;
  result: string;
}

function MatchItem({ time, game, user, result }: IProps) {
  return (
    <Box
      alignItems={"center"}
      bgcolor={"info.dark"}
      borderRadius={"5px"}
      boxSizing={"border-box"}
      display={"flex"}
      justifyContent={"center"}
      p={0.9}
      sx={{
        "& p": {
          flex: 1,
          fontSize: {
            mobile: "11px",
            tablet: "14px",
            desktopLarge: "15px",
          },
          textAlign: "center",
        },
      }}
    >
      <Typography color={"#FFF"}>
        {formatDateWithTime(new Date(time))}
      </Typography>
      <Typography color={"#FFF"}>{game}</Typography>
      <Typography color={"#FFF"}>{user.substring(0, 40)}</Typography>
      <Typography
        sx={
          result === "win"
            ? { color: "success.main" }
            : result === "lose"
            ? { color: "error.main" }
            : { color: "#a0a01d" }
        }
      >
        {result === "win"
          ? "VITÓRIA"
          : result === "lose"
          ? "DERROTA"
          : "EMPATE"}
      </Typography>
    </Box>
  );
}

export default MatchItem;
