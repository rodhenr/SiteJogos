import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNewMatchMutation, useNewUnoGameMutation } from "../gameApiSlice";

import { Alert, Box, Button, Typography } from "@mui/material";

import { changeMatchID } from "../gameSlice";
import { setData } from "../uno/unoSlice";

interface IProps {
  gameName: string;
  gameID: number;
}

function InitialScreen({ gameName, gameID }: IProps) {
  const dispatch = useDispatch();
  const [newMatch] = useNewMatchMutation();
  const [newUnoMatch] = useNewUnoGameMutation();
  const [error, setError] = useState<string>("");

  const handleNewGame = async () => {
    try {
      if (gameName.toLowerCase() === "uno") {
        const data = await newUnoMatch().unwrap();

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

        dispatch(changeMatchID(data.matchID));
      } else {
        const data = await newMatch({
          gameID,
        }).unwrap();
        dispatch(changeMatchID(data.matchID));
      }
    } catch (err: any) {
      if (err?.data?.message) {
        setError(err.data.message);
        setTimeout(() => {
          setError("");
        }, 2500);
      }
    }
  };

  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      height={"100%"}
      justifyContent={"center"}
      position={"relative"}
      width={"100%"}
    >
      {error && (
        <Alert
          severity="error"
          sx={{
            boxSizing: "border-box",
            position: "absolute",
            top: 0,
            width: "100%",
          }}
          variant="filled"
        >
          {error}
        </Alert>
      )}
      <Typography
        color={"#FFF"}
        fontFamily={"'DynaPuff', cursive"}
        sx={{
          fontSize: { mobile: 35, tablet: 55, laptop: 70, desktopLarge: 90 },
        }}
      >
        {gameName.toUpperCase()}
      </Typography>
      <Button
        sx={{
          fontSize: { mobile: 18, tablet: 20, laptop: 22 },
          height: { mobile: 40, tablet: 50 },
          width: { mobile: 200, tablet: 225, laptop: 250 },
        }}
        variant="contained"
        onClick={handleNewGame}
      >
        NOVO JOGO
      </Button>
    </Box>
  );
}

export default InitialScreen;
