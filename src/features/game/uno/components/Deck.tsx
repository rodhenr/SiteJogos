import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import {
  useUnoBuyCardMutation,
  useUnoSkipTurnMutation,
} from "../../gameApiSlice";
import { setData, skipTurn } from "../unoSlice";

import { Box, Button } from "@mui/material";

function Deck() {
  const dispatch = useDispatch();
  const nextPlayer = useSelector((state: RootState) => state.uno.nextPlayer);
  const matchID = useSelector((state: RootState) => state.uno.matchID);
  const remainingCardsLength = useSelector(
    (state: RootState) => state.uno.remainingCardsLength
  );
  const [unoSkipTurn] = useUnoSkipTurnMutation();
  const [unoBuyCard] = useUnoBuyCardMutation();

  const buyNewCard = async () => {
    if (nextPlayer !== "user" || remainingCardsLength === 0) return;

    try {
      const data = await unoBuyCard({
        matchID: matchID ?? 0,
        player: nextPlayer,
      }).unwrap();

      dispatch(
        setData({
          color: data.color,
          cpu1CardsLength: data.cpu1CardsLength,
          cpu2CardsLength: data.cpu2CardsLength,
          cpu3CardsLength: data.cpu3CardsLength,
          isClockwise: data.isClockwise,
          isGameOver: data.isGameOver,
          gameResult: data.gameResult,
          lastCard: data.lastCard,
          nextPlayer: data.nextPlayer,
          remainingCardsLength: data.remainingCardsLength,
          remainingPlayers: data.remainingPlayers,
          turn: data.turn,
          userCards: data.userCards,
        })
      );
    } catch (err: any) {
      console.log(err);
    }
  };

  const handleSkipTurn = async () => {
    if (nextPlayer !== "user") return;

    try {
      const data = await unoSkipTurn({
        matchID: matchID ?? 0,
        player: nextPlayer,
      }).unwrap();

      dispatch(
        skipTurn({
          isGameOver: data.isGameOver,
          gameResult: data.gameResult,
          nextPlayer: data.nextPlayer,
          turn: data.turn,
        })
      );
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Box
      display={"flex"}
      height={150}
      justifyContent={"center"}
      position={"relative"}
      sx={{
        cursor: "pointer",
        width: { mobile: 50, tablet: 80, laptop: 90, desktop: 100 },

        "& img": {
          height: { mobile: 80, tablet: 110, laptop: 130, desktop: 150 },

          "&:hover": {
            opacity: remainingCardsLength > 0 ? 0.9 : 1,
          },
        },
      }}
      onClick={buyNewCard}
    >
      <img src="/images/back.png" alt="deck" />
      {remainingCardsLength === 0 && (
        <Box>
          <Button
            color={"info"}
            onClick={handleSkipTurn}
            sx={{ left: 0, position: "absolute", top: "30%" }}
            variant={"contained"}
          >
            PASSAR TURNO
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Deck;
