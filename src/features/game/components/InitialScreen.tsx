import { Box, Button, Typography } from "@mui/material";
import { useCreateNewGameMutation } from "../gameApiSlice";
import { useDispatch } from "react-redux";
import { changeMatchID } from "../gameSlice";

interface IProps {
  gameName: string;
  gameID: number;
}

interface IError {
  data: {
    message: string;
  };
  status: string;
}

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
      height={"100%"}
      justifyContent={"center"}
      width={"100%"}
    >
      <Typography variant="h3">{gameName.toUpperCase()}</Typography>
      <Button variant="contained" onClick={handleNewGame}>
        NOVO JOGO
      </Button>
    </Box>
  );
}

export default InitialScreen;
