import { Box, Typography } from "@mui/material";

interface IProps {
  level: number;
  player: string;
  playerID: number;
  position: number;
}

function RankingItem({ level, player, playerID, position }: IProps) {
  const bColor = [1, 2, 3].includes(position) ? "tertiary.main" : "info.dark";
  const hoverBackgroundColor = [1, 2, 3].includes(position)
    ? "tertiary.light"
    : "info.main";

  return (
    <Box
      bgcolor={bColor}
      borderRadius={"10px"}
      boxSizing={"border-box"}
      color={"#FFF"}
      display={"flex"}
      justifyContent={"space-between"}
      px={1}
      py={0.7}
      sx={{
        "& p": {
          fontSize: { mobile: "12px", laptop: "13px", desktopLarge: "14px" },
          maxWidth: "100%",
        },

        "&:hover": {
          bgcolor: hoverBackgroundColor,
          cursor: "pointer",
        },
      }}
    >
      <Box
        display={"flex"}
        gap={0.5}
        sx={{ fontSize: { mobile: "12px", laptop: "14px" } }}
      >
        <Typography>{position}.</Typography>
        <Typography>{player.substring(0, 40)}</Typography>
      </Box>
      <Typography>NÍVEL {level}</Typography>
    </Box>
  );
}

export default RankingItem;
