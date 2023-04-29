import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { useNewMatchMutation } from "../../gameApiSlice";
import { resetGameState } from "../jokenpoSlice";

import { Box, Button, Typography } from "@mui/material";

import Paper from "./IconPaper";
import Rock from "./IconRock";
import Scissors from "./IconScissors";

interface IProps {
  gameID: number;
  url: string;
}

function EndScreen({ gameID, url }: IProps) {
  const dispatch = useDispatch();
  const [newMatch] = useNewMatchMutation();

  const result = useSelector((state: RootState) => state.jokenpo.result);
  const userChoice = useSelector(
    (state: RootState) => state.jokenpo.userChoice
  );
  const cpuChoice = useSelector((state: RootState) => state.jokenpo.cpuChoice);

  const getComponent = (name: string) => {
    switch (name) {
      case "rock":
        return <Rock />;
      case "paper":
        return <Paper />;
      case "scissors":
        return <Scissors />;
      default:
        break;
    }
  };

  const handleNewMatch = async () => {
    try {
      const data = await newMatch({
        gameID,
      }).unwrap();

      dispatch(changeJokenpoMatchID(data.matchID));
      dispatch(resetGameState());
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
      gap={3}
      height={"100%"}
      justifyContent={"center"}
      width={"100%"}
    >
      <Box
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        gap={4}
      >
        <Typography
          fontWeight={"bold"}
          sx={{ fontSize: { mobile: 35, laptop: 70 } }}
        >
          {result === "win"
            ? "VITÓRIA!"
            : result === "lose"
            ? "DERROTA!"
            : "EMPATE!"}
        </Typography>
        <Box display={"flex"} gap={5} justifyContent={"center"}>
          {result && userChoice && cpuChoice && (
            <>
              <Box
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                sx={{ gap: { mobile: 1, laptop: 2 } }}
              >
                {getComponent(userChoice)}
                <Typography
                  sx={{ fontSize: { mobile: 16, tablet: 22, laptop: 28 } }}
                >
                  VOCÊ
                </Typography>
              </Box>
              <Box
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                sx={{ gap: { mobile: 1, laptop: 2 } }}
              >
                {getComponent(cpuChoice)}
                <Typography
                  sx={{ fontSize: { mobile: 16, tablet: 22, laptop: 28 } }}
                >
                  COMPUTADOR
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Box>
        <Button onClick={handleNewMatch} variant="contained">
          JOGAR NOVAMENTE
        </Button>
      </Box>
    </Box>
  );
}

export default EndScreen;
function changeJokenpoMatchID(matchID: number): any {
  throw new Error("Function not implemented.");
}

