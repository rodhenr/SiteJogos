import { Box } from "@mui/material";
import Deck from "./Deck";
import CardsPlayed from "./CardsPlayed";

function MiddleCards() {
  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      gap={1}
      justifyContent={"center"}
    >
      <Deck />
      <CardsPlayed />
    </Box>
  );
}

export default MiddleCards;
