import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

import { Box } from "@mui/material";

import InitialScreen from "../components/InitialScreen";
import EndScreen from "./components/EndScreen";
import Game from "./components/Game";

function Jokenpo() {
  const result = useSelector((state: RootState) => state.jokenpo.result);
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
        <InitialScreen
          gameName={"Jokenpo"}
          gameID={3}
          url={"/api/games/jokenpo/start"}
        />
      ) : result ? (
        <EndScreen gameID={3} url={"/api/games/jokenpo/start"} />
      ) : (
        <Game matchID={matchID} />
      )}
    </Box>
  );
}

export default Jokenpo;
