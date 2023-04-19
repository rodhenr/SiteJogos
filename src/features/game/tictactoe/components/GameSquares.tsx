import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { useCpuMoveMutation, usePlayerMoveMutation } from "../../gameApiSlice";

import { Box, Typography } from "@mui/material";

import { v4 as uuidv4 } from "uuid";
import { changeGameState } from "../../gameSlice";
import { useEffect } from "react";

interface IProps {
  matchID: number;
}

function GameSquares({ matchID }: IProps) {
  const dispatch = useDispatch();
  const cells = useSelector((state: RootState) => state.game.cells);
  const isPlayerNext = useSelector(
    (state: RootState) => state.game.isPlayerNext
  );
  const isGameOver = useSelector((state: RootState) => state.game.isGameOver);
  const [doPlayerMove] = usePlayerMoveMutation();
  const [doCpuMove] = useCpuMoveMutation();

  useEffect(() => {
    if (!isPlayerNext && !isGameOver) {
      const handleCpuMove = async () => {
        try {
          const data = await doCpuMove({ matchID }).unwrap();
          dispatch(changeGameState(data));
        } catch (err) {
          console.log(err);
        }
      };

      handleCpuMove();
    }
  }, [isPlayerNext, isGameOver]);

  const handlePlayerMove = async (cell: boolean | null, position: number) => {
    if (cell !== null) return;

    try {
      const data = await doPlayerMove({
        matchID,
        squarePosition: position,
      }).unwrap();
      dispatch(changeGameState(data));
      //faz algo com a data
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Box
      alignContent={"center"}
      alignItems={"center"}
      display={"grid"}
      flex={1}
      gap={"0 8px"}
      justifyItems={"center"}
      sx={{
        gridTemplateColumns: {
          mobile: "repeat(3, 80px)",
          tablet: "repeat(3, 100px)",
          laptop: "repeat(3, 130px)",
          desktopLarge: "repeat(3, 160px)",
        },
        gridTemplateRows: {
          mobile: "repeat(3, 80px)",
          tablet: "repeat(3, 100px)",
          laptop: "repeat(3, 130px)",
          desktopLarge: "repeat(3, 160px)",
        },
      }}
    >
      {cells.map((cell, index) => {
        return (
          <Box
            alignItems={"center"}
            bgcolor={"#282c34"}
            borderRadius={"7px"}
            display={"flex"}
            justifyContent={"center"}
            sx={{
              cursor: "pointer",
              height: {
                mobile: "70px",
                tablet: "90px",
                laptop: "120px",
                desktopLarge: "150px",
              },
              width: {
                mobile: "70px",
                tablet: "90px",
                laptop: "120px",
                desktopLarge: "150px",
              },

              "& p": {
                fontSize: { mobile: "44px", laptop: "96px" },
              },

              "&:hover": {
                bgcolor: "#434a56",
              },
            }}
            key={uuidv4()}
            onClick={() => handlePlayerMove(cell, index + 1)}
          >
            <Typography color={"#FFF"}>
              {cell ? "X" : cell === null ? "" : "O"}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default GameSquares;
