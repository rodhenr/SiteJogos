import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { useUnoBuyCardMutation } from "../../gameApiSlice";
import { buyCard } from "../unoSlice";

import { Box } from "@mui/material";

function Deck() {
  const dispatch = useDispatch();
  const nextPlayer = useSelector((state: RootState) => state.uno.nextPlayer);
  const matchID = useSelector((state: RootState) => state.game.matchID);

  const [unoBuyCard] = useUnoBuyCardMutation();

  const buyNewCard = async () => {
    try {
      const data = await unoBuyCard({
        matchID: matchID ?? 0,
        player: nextPlayer,
      }).unwrap();
      
      dispatch(
        buyCard({
          color: data.color,
          isClockwise: data.isClockwise,
          lastCard: data.lastCard,
          nextPlayer: data.nextPlayer,
          remainingCardsLength: data.remainingCardsLength,
          remainingPlayers: data.remainingPlayers,
          userCards: data.userCards,
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
      sx={{
        cursor: "pointer",
        "& img": {
          height: 150,

          "&:hover": {
            opacity: 0.9,
          },
        },
      }}
      width={100}
      onClick={() => {
        buyNewCard();
      }}
    >
      <img src={`./images/back.png`} alt="deck" />
    </Box>
  );
}

export default Deck;
