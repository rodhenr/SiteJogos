import { useDispatch } from "react-redux";
import { useJokenpoUserChoiceMutation } from "../../gameApiSlice";

import { Box, Typography } from "@mui/material";

import Paper from "./IconPaper";
import Rock from "./IconRock";
import Scissors from "./IconScissors";
import { changeGameState } from "../jokenpoSlice";

interface IProps {
  matchID: number;
}

function Game({ matchID }: IProps) {
  const dispatch = useDispatch();
  const [userChoice] = useJokenpoUserChoiceMutation();

  const handlePlayerMove = async (choice: string) => {
    try {
      const data = await userChoice({ matchID, choice }).unwrap();

      dispatch(changeGameState(data));
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      justifyContent={"center"}
      sx={{ gap: { mobile: 2, laptop: 6 } }}
      width={"100%"}
    >
      <Typography
        sx={{
          fontSize: { mobile: 28, tablet: 40, laptop: 50, desktopLarge: 60 },
        }}
      >
        ESCOLHA UM ITEM
      </Typography>
      <Box display={"flex"} sx={{ gap: { mobile: 2, laptop: 7 } }}>
        <Box
          alignItems={"center"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          onClick={() => handlePlayerMove("rock")}
          sx={{ gap: { laptop: 1 } }}
        >
          <Rock />
          <Typography sx={{ fontSize: { mobile: 16, laptop: 28 } }}>
            PEDRA
          </Typography>
        </Box>
        <Box
          alignItems={"center"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          onClick={() => handlePlayerMove("paper")}
          sx={{ gap: { laptop: 1 } }}
        >
          <Paper />
          <Typography sx={{ fontSize: { mobile: 16, laptop: 28 } }}>
            PAPEL
          </Typography>
        </Box>
        <Box
          alignItems={"center"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          onClick={() => handlePlayerMove("scissors")}
          sx={{ gap: { laptop: 1 } }}
        >
          <Scissors />
          <Typography sx={{ fontSize: { mobile: 16, laptop: 28 } }}>
            TESOURA
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Game;
