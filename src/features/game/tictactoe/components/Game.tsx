import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { useCpuMoveMutation, usePlayerMoveMutation } from "../../gameApiSlice";
import { changeGameState } from "../tictactoeSlice";

import { Box, Typography } from "@mui/material";

import { v4 as uuidv4 } from "uuid";

interface IProps {
  matchID: number;
}

function Game({ matchID }: IProps) {
  const dispatch = useDispatch();
  const cells = useSelector((state: RootState) => state.tictactoe.cells);
  const isPlayerNext = useSelector(
    (state: RootState) => state.tictactoe.isPlayerNext
  );
  const isGameOver = useSelector(
    (state: RootState) => state.tictactoe.isGameOver
  );
  const [doPlayerMove] = usePlayerMoveMutation();
  const [doCpuMove] = useCpuMoveMutation();

  useEffect(() => {
    if (!isPlayerNext && !isGameOver) {
      const handleCpuMove = async () => {
        try {
          const data = await doCpuMove({ matchID }).unwrap();

          dispatch(
            changeGameState({
              cells: data.cells,
              gameResult: data.gameResult,
              isGameOver: data.isGameOver,
              isPlayerNext: data.isPlayerNext,
            })
          );
        } catch (err) {
          console.log(err);
        }
      };

      handleCpuMove();
    }
  }, [dispatch, doCpuMove, matchID, isPlayerNext, isGameOver]);

  const handlePlayerMove = async (cell: boolean | null, position: number) => {
    if (cell !== null) return;

    try {
      const data = await doPlayerMove({
        matchID,
        squarePosition: position,
      }).unwrap();

      dispatch(
        changeGameState({
          cells: data.cells,
          gameResult: data.gameResult,
          isGameOver: data.isGameOver,
          isPlayerNext: data.isPlayerNext,
        })
      );
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

export default Game;
