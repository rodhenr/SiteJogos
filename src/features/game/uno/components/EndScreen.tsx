import { useDispatch, useSelector } from "react-redux";
import { setData, setUnoMatchID } from "../unoSlice";
import { useNewUnoGameMutation } from "../../gameApiSlice";
import { RootState } from "../../../../app/store";

import { Box, Button, Typography } from "@mui/material";

interface IProps {
  gameID: number;
}

function EndScreen({ gameID }: IProps) {
  const dispatch = useDispatch();
  const [newMatch] = useNewUnoGameMutation();
  const gameResult = useSelector((state: RootState) => state.uno.gameResult);

  const handleNewGame = async () => {
    try {
      const data = await newMatch().unwrap();

      dispatch(setUnoMatchID(data.matchID));

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
      if (err?.data?.message) {
        console.log("Mensagem:", err.data.message, "  Status:", err.status);
      }
    }
  };

  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      justifyContent={"center"}
      width={"100%"}
    >
      <Box
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        flex={1}
        justifyContent={"flex-end"}
      >
        <Typography
          color={"secondary.dark"}
          sx={{
            fontSize: { mobile: 35, tablet: 50, laptop: 55 },
            fontWeight: "bold",
          }}
          textAlign={"center"}
        >
          Partida encerrada!
        </Typography>
        <Box
          sx={{
            "& p": {
              color: "#FFF",
              fontSize: { mobile: 28, tablet: 34 },
              textAlign: "center",
            },
          }}
        >
          {gameResult && gameResult === "win" ? (
            <Typography>VOCÊ VENCEU!</Typography>
          ) : gameResult === "lose" ? (
            <Typography>VOCÊ PERDEU!</Typography>
          ) : (
            <Typography>EMPATE!</Typography>
          )}
        </Box>
      </Box>
      <Box alignItems={"center"} display={"flex"} flex={1}>
        <Button
          color={"primary"}
          onClick={handleNewGame}
          sx={{
            cursor: "pointer",
            fontSize: { mobile: 16, laptop: 20 },
            height: { mobile: 60 },
            width: { mobile: 200, laptop: 250 },

            "&:hover": {
              color: "info.light",
            },
          }}
          variant={"contained"}
        >
          JOGAR NOVAMENTE
        </Button>
      </Box>
    </Box>
  );
}

export default EndScreen;
