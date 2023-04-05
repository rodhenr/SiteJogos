import { Box, Typography } from "@mui/material";

interface IProps {
  level: number;
  player: string;
  playerID: number;
  position: number;
}

function RankingItem({ level, player, playerID, position }: IProps) {
  const bColor =
    position === 1
      ? "#E5D432"
      : position === 2
      ? "#9B9B9B"
      : position === 3
      ? "#E58832"
      : "#232323";

  const color = position < 4 ? "#000" : "#6a6a84";

  const handleClick = () => {};

  return (
    <Box
      bgcolor={bColor}
      borderRadius={"10px"}
      boxSizing={"border-box"}
      color={color}
      display={"flex"}
      justifyContent={"space-between"}
      padding={"4px 8px"}
      sx={{
        "& p": {
          fontSize: { mobile: "11px", laptop: "12px", desktopLarge: "13px" },
          maxWidth: "100%",
        },

        "&:hover": {
          cursor: "pointer",
          opacity: "0.75",
        },
      }}
    >
      <Box
        display={"flex"}
        gap={"4px"}
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
