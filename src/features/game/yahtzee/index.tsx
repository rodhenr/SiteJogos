import { Box } from "@mui/material";

import Game from "./components/Game";
import InitialScreen from "../components/InitialScreen";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import EndScreen from "./components/EndScreen";

function Index() {
  const isGameOver = useSelector(
    (state: RootState) => state.yahtzee.isGameOver
  );
  const matchID = useSelector((state: RootState) => state.yahtzee.matchID);

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
        <InitialScreen gameName={"YAHTZEE"} gameID={2} />
      ) : isGameOver ? (
        <EndScreen />
      ) : (
        <Game />
      )}
    </Box>
  );
}

export default Index;
