import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { resetJokenpo } from "../../jokenpo/jokenpoSlice";
import { resetUno } from "../../uno/unoSlice";
import { resetTicTacToe } from "../../tictactoe/tictactoeSlice";

import { Box } from "@mui/material";

import Header from "./Header";
import Rules from "./Rules";
import Score from "./Score";

function Game() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetJokenpo());
    dispatch(resetUno());
    dispatch(resetTicTacToe());
  }, [dispatch]);

  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      gap={0.5}
      height={"100%"}
      width={"100%"}
    >
      <Header />
      <Rules />
      <Score />
    </Box>
  );
}

export default Game;
