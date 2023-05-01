import { Box } from "@mui/material";

import Header from "./Header";
import Rules from "./Rules";
import Score from "./Score";

function Game() {
  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
    >
      <Header />
      <Rules />
      <Score />
    </Box>
  );
}

export default Game;
