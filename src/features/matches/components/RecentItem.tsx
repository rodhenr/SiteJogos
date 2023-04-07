import { Box, Typography, useTheme } from "@mui/material";

import { formatDateWithTime } from "../../../utils/formatDate";

interface IProps {
  time: Date;
  game: string;
  user: string;
  win: boolean;
}

function RecentItem({ time, game, user, win }: IProps) {
  const theme = useTheme();

  return (
    <Box
      alignItems={"center"}
      bgcolor={theme.palette.info.dark}
      borderRadius={"5px"}
      boxSizing={"border-box"}
      display={"flex"}
      justifyContent={"center"}
      p={0.9}
      sx={{
        "& p": {
          color: "#fff",
          flex: 1,
          fontFamily: "Roboto Condensed",
          fontSize: {
            mobile: "11.5px",
            tablet: "14px",
            desktopLarge: "15px",
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
