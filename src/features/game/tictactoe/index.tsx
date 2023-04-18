import { Box } from "@mui/material";

import GameSquares from "./components/GameSquares";
import InitialScreen from "../components/InitialScreen";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import EndScreen from "./components/EndScreen";

function Index() {
  const isGameOver = useSelector((state: RootState) => state.game.isGameOver);
  const matchID = useSelector((state: RootState) => state.game.matchID);

  return (
    <Box
      alignItems={"center"}
      boxSizing={"border-box"}
      display={"flex"}
      flex={1}
      flexDirection={"column"}
      height={"100%"}
      justifyItems={"center"}
      p={1}
    >
      {!matchID ? (
        <InitialScreen gameName={"Jogo da Velha"} gameID={4} />
      ) : isGameOver ? (
        <EndScreen gameID={4} />
      ) : (
        <GameSquares matchID={matchID} />
      )}
    </Box>
  );
}

export default Index;
