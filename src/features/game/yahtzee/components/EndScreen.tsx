import { useDispatch, useSelector } from "react-redux";
import { useNewYahtzeeGameMutation } from "../../gameApiSlice";
import { RootState } from "../../../../app/store";

import { Box, Button, Typography } from "@mui/material";
import { setYahtzeeData, setYahtzeeMatchID } from "../yahtzeeSlice";

function EndScreen() {
  const dispatch = useDispatch();
  const [newMatch] = useNewYahtzeeGameMutation();
  const gameResult = useSelector(
    (state: RootState) => state.yahtzee.gameResult
  );

  const handleNewGame = async () => {
    try {
      const data = await newMatch().unwrap();

      dispatch(setYahtzeeMatchID(data.matchID));

      dispatch(setYahtzeeData(data));
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
        <Typography variant={"h2"}>
          {gameResult === "win" ? "Você venceu!" : "Você perdeu!"}
        </Typography>
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
