import { Box, Typography, useTheme } from "@mui/material";

interface IProps {
  level: number;
  player: string;
  playerID: number;
  position: number;
}

function RankingItem({ level, player, playerID, position }: IProps) {
  const theme = useTheme();

  const bColor =
    position === 1
      ? "#E5D432"
      : position === 2
      ? "#9B9B9B"
      : position === 3
      ? "#E58832"
      : theme.palette.info.dark;

  const color = position < 4 ? "#242424" : "#FFF";

  return (
    <Box
      bgcolor={bColor}
      borderRadius={"10px"}
      boxSizing={"border-box"}
      color={color}
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
          cursor: "pointer",
          opacity: "0.75",
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
