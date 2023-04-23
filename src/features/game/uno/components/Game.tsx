import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { cpuMove } from "../unoSlice";
import { useUnoCPUMoveMutation } from "../../gameApiSlice";

import { Box } from "@mui/material";

import Cards from "./Cards";
import MiddleCards from "./MiddleCards";

interface IProps {
  matchID: number;
}
function Game({ matchID }: IProps) {
  const dispatch = useDispatch();
  const nextPlayer = useSelector((state: RootState) => state.uno.nextPlayer);
  const [unoCpuMove] = useUnoCPUMoveMutation();

  useEffect(() => {
    if (nextPlayer !== "user") {
      const cpuTurn = async () => {
        setTimeout(async () => {
          try {
            const data = await unoCpuMove({
              matchID,
              player: nextPlayer,
            }).unwrap();

            dispatch(
              cpuMove({
                color: data.color,
                isClockwise: data.isClockwise,
                lastCard: data.lastCard,
                nextPlayer: data.nextPlayer,
                remainingCardsLength: data.remainingCardsLength,
                remainingPlayers: data.remainingPlayers,
                userCards: data.userCards,
              })
            );
          } catch (err) {
            console.log(err);
          }
        }, 1000);
      };

      cpuTurn();
    }
  }, [dispatch, matchID, nextPlayer, unoCpuMove]);

  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      height={"100vh"}
      justifyContent={"space-between"}
      position={"relative"}
      sx={{
        bgColor: "#8338ec",
        fontFamily: "'Montserrat', sans-serif",
        overflow: "hidden",
      }}
      width={"100vw"}
    >
      <Cards position="top" />

      <Box
        alignItems={"center"}
        display={"flex"}
        justifyContent={"space-between"}
        sx={{ maxWidth: { desktopLarge: "50vw" } }}
        width={"100%"}
      >
        <Cards position="left" />

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
        </Box>

        <Cards position="right" />
      </Box>

      <Cards position="bottom" />
    </Box>
  );
}

export default Game;
