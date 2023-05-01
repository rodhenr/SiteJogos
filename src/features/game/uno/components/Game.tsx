import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setData } from "../unoSlice";
import { useUnoCPUMoveMutation } from "../../gameApiSlice";

import { Box } from "@mui/material";

import Cards from "./Cards";
import MiddleCards from "./MiddleCards";
import Next from "./Next";
import ChooseColor from "./ChooseColor";

interface IProps {
  matchID: number;
}

function Game({ matchID }: IProps) {
  const dispatch = useDispatch();
  const nextPlayer = useSelector((state: RootState) => state.uno.nextPlayer);
  const userCards = useSelector((state: RootState) => state.uno.userCards);
  const cpu1CardsLength = useSelector(
    (state: RootState) => state.uno.cpu1CardsLength
  );
  const cpu2CardsLength = useSelector(
    (state: RootState) => state.uno.cpu2CardsLength
  );
  const cpu3CardsLength = useSelector(
    (state: RootState) => state.uno.cpu3CardsLength
  );
  const chooseColor = useSelector((state: RootState) => state.uno.chooseColor);
  const turn = useSelector((state: RootState) => state.uno.turn);

  const [unoCpuMove] = useUnoCPUMoveMutation();

  useEffect(() => {
    const cpuTurn = async () => {
      if (nextPlayer !== "user") {
        setTimeout(async () => {
          try {
            const data = await unoCpuMove({
              matchID,
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
          } catch (err) {
            console.log(err);
          }
        }, 1000);
      }
    };

    cpuTurn();
  }, [dispatch, matchID, nextPlayer, unoCpuMove, turn]);

  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      position={"relative"}
      sx={{
        fontFamily: "'Montserrat', sans-serif",
        overflow: "hidden",
      }}
      width={"100%"}
    >
      {chooseColor && <ChooseColor />}
      <Cards
        cardsData={Array(cpu2CardsLength).fill("")}
        player={"CPU 2"}
        position="top"
      />

      <Box
        alignItems={"center"}
        display={"flex"}
        justifyContent={"space-between"}
        maxHeight={250}
        width={"100%"}
      >
        <Cards
          cardsData={Array(cpu1CardsLength).fill("")}
          player={"CPU 1"}
          position="left"
        />

        <Box
          alignItems={"center"}
          borderRadius={"8px"}
          display={"flex"}
          flexDirection={"column"}
          gap={1}
          height={"250px"}
          justifyContent={"center"}
          width={"350px"}
        >
          <MiddleCards />
          <Next />
        </Box>

        <Cards
          cardsData={Array(cpu3CardsLength).fill("")}
          player={"CPU 3"}
          position="right"
        />
      </Box>

      <Cards cardsData={userCards} player={"PLAYER"} position="bottom" />
    </Box>
  );
}

export default Game;
