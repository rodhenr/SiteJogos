import { Box, Button, Typography } from "@mui/material";
import { useCreateNewGameMutation } from "../gameApiSlice";
import { useDispatch } from "react-redux";
import { changeMatchID } from "../gameSlice";

interface IProps {
  gameName: string;
  gameID: number;
}

/* interface IError {
  data: {
    message: string;
  };
  status: string;
} */

function InitialScreen({ gameName, gameID }: IProps) {
  const dispatch = useDispatch();
  const [createNewGame] = useCreateNewGameMutation();

  const handleNewGame = async () => {
    try {
      const data = await createNewGame(gameID).unwrap();
      dispatch(changeMatchID(data.matchID));
    } catch (err: any) {
      if (err?.data?.message) {
        //Necessário criar estado de erro(ou alerta) e exibir na tela
        console.log("Mensagem:", err.data.message, "  Status:", err.status);
      }
    }
  };

  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      height={"100%"}
      justifyContent={"center"}
      width={"100%"}
    >
      <Typography
        color={"#FFF"}
        fontFamily={"'DynaPuff', cursive"}
        sx={{
          fontSize: { mobile: 35, tablet: 55, laptop: 70, desktopLarge: 90 },
        }}
      >
        {gameName.toUpperCase()}
      </Typography>
      <Button
        sx={{
          fontSize: { mobile: 18, tablet: 20, laptop: 22 },
          height: { mobile: 40, tablet: 50 },
          width: { mobile: 200, tablet: 225, laptop: 250 },
        }}
        variant="contained"
        onClick={handleNewGame}
      >
        NOVO JOGO
      </Button>
    </Box>
  );
}

export default InitialScreen;
