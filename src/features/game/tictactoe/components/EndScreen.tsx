import { useDispatch } from "react-redux";
import { changeMatchID } from "../../gameSlice";

import { Box, Button } from "@mui/material";

import EndMessage from "./EndMessage";
import { useNewMatchMutation } from "../../gameApiSlice";

interface IProps {
  gameID: number;
}

function EndScreen({ gameID }: IProps) {
  const dispatch = useDispatch();
  const [newMatch] = useNewMatchMutation();

  const handleNewGame = async () => {
    try {
      const data = await newMatch({
        gameID,
      }).unwrap();
      dispatch(changeMatchID(data.matchID));
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
      <EndMessage />
      <Box alignItems={"center"} display={"flex"} flex={1}>
        <Button
          color={"primary"}
          onClick={handleNewGame}
          sx={{
            cursor: "pointer",
            fontSize: { mobile: 16, laptop: 20 },
            height: { mobile: 60, laptop: 80 },
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
