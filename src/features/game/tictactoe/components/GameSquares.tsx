import { Box, Typography } from "@mui/material";

interface Props {
  itens: string[];
  play: Function;
}

function GameSquares({ itens, play }: Props) {
  return (
    <Box
      alignContent={"center"}
      alignItems={"center"}
      display={"grid"}
      flex={1}
      gap={"0 8px"}
      justifyItems={"center"}
      sx={{
        gridTemplateColumns: {
          mobile: "repeat(3, 80px)",
          tablet: "repeat(3, 100px)",
          laptop: "repeat(3, 130px)",
          desktopLarge: "repeat(3, 160px)",
        },
        gridTemplateRows: {
          mobile: "repeat(3, 80px)",
          tablet: "repeat(3, 100px)",
          laptop: "repeat(3, 130px)",
          desktopLarge: "repeat(3, 160px)",
        },
      }}
    >
      {itens.map((i, key) => {
        return (
          <Box
            alignItems={"center"}
            bgcolor={"#282c34"}
            borderRadius={"7px"}
            display={"flex"}
            justifyContent={"center"}
            sx={{
              cursor: "pointer",
              height: {
                mobile: "70px",
                tablet: "90px",
                laptop: "120px",
                desktopLarge: "150px",
              },
              width: {
                mobile: "70px",
                tablet: "90px",
                laptop: "120px",
                desktopLarge: "150px",
              },

              "& p": {
                fontSize: { mobile: "44px", laptop: "96px" },
              },

              "&:hover": {
                bgcolor: "#434a56",
              },
            }}
            key={key}
            onClick={() => play(key)}
          >
            <Typography color={"#FFF"}>{i}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default GameSquares;
