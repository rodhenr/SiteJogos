import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

import { Box, Typography } from "@mui/material";

function EndMensage() {
  const gameResult = useSelector((state: RootState) => state.tictactoe.gameResult);

  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      flex={1}
      flexDirection={"column"}
      height={"100%"}
      justifyContent={"flex-end"}
      sx={{
        minHeight: "50px",
      }}
    >
      <Typography
        color={"secondary.dark"}
        sx={{
          fontSize: { mobile: 35, tablet: 50, laptop: 55 },
          fontWeight: "bold",
        }}
        textAlign={"center"}
      >
        Partida encerrada!
      </Typography>
      <Box
        sx={{
          "& p": {
            color: "#FFF",
            fontSize: { mobile: 28, tablet: 34 },
            textAlign: "center",
          },
        }}
      >
        {gameResult && gameResult === "win" ? (
          <Typography>VOCÊ VENCEU!</Typography>
        ) : gameResult === "lose" ? (
          <Typography>VOCÊ PERDEU!</Typography>
        ) : (
          <Typography>EMPATE!</Typography>
        )}
      </Box>
    </Box>
  );
}

export default EndMensage;
