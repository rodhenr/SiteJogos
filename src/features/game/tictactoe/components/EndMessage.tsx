import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

import { Box, Typography } from "@mui/material";

function EndMensage() {
  const isUserWin = useSelector((state: RootState) => state.game.isUserWin);

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
      {!!isUserWin ? (
        <Box
          sx={{
            "& p": {
              color: "#FFF",
              fontSize: { mobile: 28, tablet: 34 },
              textAlign: "center",
            },
          }}
        >
          <Typography>VOCÊ VENCEU!</Typography>
        </Box>
      ) : (
        <Typography>VOCÊ PERDEU!</Typography>
      )}
    </Box>
  );
}

export default EndMensage;
