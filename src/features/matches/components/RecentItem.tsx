import { Box, Typography } from "@mui/material";

import { formatDateWithTime } from "../../../utils/formatDate";

interface IProps {
  time: Date;
  game: string;
  user: string;
  win: boolean;
}

function RecentItem({ time, game, user, win }: IProps) {
  return (
    <Box
      alignItems={"center"}
      bgcolor={"#232323"}
      borderRadius={"5px"}
      boxSizing={"border-box"}
      display={"flex"}
      justifyContent={"center"}
      p={"5px"}
      sx={{
        "& p": {
          color: "#fff",
          flex: 1,
          fontFamily: "Roboto Condensed",
          fontSize: {
            mobile: "10px",
            tablet: "11px",
            laptop: "12px",
            desktopLarge: "13px",
          },
          textAlign: "center",
        },
      }}
    >
      <Typography>{formatDateWithTime(new Date(time))}</Typography>
      <Typography>{game}</Typography>
      <Typography>{user.substring(0, 40)}</Typography>
      <Typography style={win ? { color: "#11C318" } : { color: "#FE3434" }}>
        {win ? "VITÓRIA" : "DERROTA"}
      </Typography>
    </Box>
  );
}

export default RecentItem;
