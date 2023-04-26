import { useDispatch, useSelector } from "react-redux";
import { setData } from "../unoSlice";
import { RootState } from "../../../../app/store";
import { useUnoPlayerMoveMutation } from "../../gameApiSlice";

import { Box, Typography } from "@mui/material";

import { v4 as uuidv4 } from "uuid";

interface IProps {
  cardsData: string[];
  player: string;
  position: string;
}

function Cards({ cardsData, player, position }: IProps) {
  const dispatch = useDispatch();
  const [userMove] = useUnoPlayerMoveMutation();
  const matchID = useSelector((state: RootState) => state.game.matchID);

  const handlePlayerMove = async (card: string) => {
    try {
      const data = await userMove({
        matchID: matchID ?? 0,
        card,
        color: null,
      }).unwrap();

      dispatch(
        setData({
          color: data.color,
          cpu1CardsLength: data.cpu1CardsLength,
          cpu2CardsLength: data.cpu2CardsLength,
          cpu3CardsLength: data.cpu3CardsLength,
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
    <Box>
      {(position === "right" || position === "bottom") && (
        <Typography>{player}</Typography>
      )}
      {["CPU 1", "CPU 2", "CPU 3"].includes(player) ? (
        <Box display={"flex"}>
          {cardsData.map((i) => {
            return (
              <Box key={uuidv4()} sx={{ "& img": { height: 90, width: 70 } }}>
                <img src="/images/back.png" alt="card" />
              </Box>
            );
          })}
        </Box>
      ) : (
        <Box display={"flex"}>
          {cardsData.map((i) => {
            return (
              <Box
                key={uuidv4()}
                onClick={() => {
                  handlePlayerMove(i);
                }}
                sx={{
                  "& img": {
                    cursor: "pointer",
                    height: 90,
                    width: 70,

                    "&:hover": {
                      opacity: 0.7,
                    },
                  },
                }}
              >
                <img src={`/images/${i}.png`} alt={i} />
              </Box>
            );
          })}
        </Box>
      )}
      {(position === "left" || position === "top") && (
        <Typography>{player}</Typography>
      )}
    </Box>
  );
}

export default Cards;
//className={result.class2}
//className={result.class}
