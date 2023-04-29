import { Box } from "@mui/material";

import Game from "./components/Game";
import InitialScreen from "../components/InitialScreen";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import EndScreen from "./components/EndScreen";

function Index() {
  const isGameOver = useSelector((state: RootState) => state.uno.isGameOver);
  const matchID = useSelector((state: RootState) => state.uno.matchID);

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
        <InitialScreen
          gameName={"UNO"}
          gameID={1}
        />
      ) : isGameOver ? (
        <EndScreen gameID={4} />
      ) : (
        <Game matchID={matchID} />
      )}
    </Box>
  );
}

export default Index;
