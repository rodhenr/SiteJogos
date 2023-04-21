import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNewMatchMutation } from "../gameApiSlice";

import { Alert, Box, Button, Typography } from "@mui/material";

import { changeMatchID } from "../gameSlice";

interface IProps {
  gameName: string;
  gameID: number;
  url: string;
}

/* interface IError {
  data: {
    message: string;
  };
  status: string;
} */

function InitialScreen({ gameName, gameID, url }: IProps) {
  const dispatch = useDispatch();
  const [newMatch] = useNewMatchMutation();
  const [error, setError] = useState<string>("");

  const handleNewGame = async () => {
    try {
      const data = await newMatch({
        gameID,
        url,
      }).unwrap();
      dispatch(changeMatchID(data.matchID));
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
