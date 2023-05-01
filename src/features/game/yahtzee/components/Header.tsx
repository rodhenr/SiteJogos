import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { useYahtzeeRollMutation } from "../../gameApiSlice";
import { setYahtzeeData } from "../yahtzeeSlice";

import { Box, Button, Typography } from "@mui/material";

import { v4 as uuidv4 } from "uuid";

function Header() {
  const dispatch = useDispatch();
  const [dicesFrozen, setDicesFrozen] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const matchID = useSelector((state: RootState) => state.yahtzee.matchID);
  const dices = useSelector((state: RootState) => state.yahtzee.currentDices);
  const remainingMoves = useSelector(
    (state: RootState) => state.yahtzee.remainingMoves
  );
  const [roll] = useYahtzeeRollMutation();

  const handleFreezeDie = (dieNumber: number) => {
    setDicesFrozen((prev) => [
      ...prev.slice(0, dieNumber),
      !prev[dieNumber],
      ...prev.slice(dieNumber + 1, prev.length),
    ]);
  };

  const handleRoll = async () => {
    if (remainingMoves === 0) return;

    try {
      const data = await roll({
        matchID: matchID ?? 0,
        dices: dicesFrozen,
      }).unwrap();

      dispatch(setYahtzeeData(data));
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Box
      alignItems={"center"}
      bgcolor={"secondary.main"}
      display={"flex"}
      justifyContent={"center"}
      minHeight={80}
      py={1}
      width={"100%"}
    >
      <Box
        alignItems={"center"}
        display={"flex"}
        flex={1}
        justifyContent={"space-around"}
        px={0.5}
      >
        {dices.map((dice: number, index: number) => {
          return (
            <Box
              alignItems={"center"}
              boxSizing={"border-box"}
              display={"flex"}
              flexDirection={"column"}
              sx={{
                "& img": {
                  bgcolor: "#fff",
                  borderRadius: "10px",
                  cursor: "pointer",
                  height: 60,
                  opacity: !dicesFrozen[index] ? 1 : 0.7,
                },
              }}
              key={uuidv4()}
              onClick={() => {
                handleFreezeDie(index);
              }}
            >
              <img src={`/images/dice${dice}.svg`} alt={`dice_${dice}`} />
            </Box>
          );
        })}
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        justifyContent={"center"}
        px={1}
      >
        <Typography color={"white"} fontSize={14}>
          {remainingMoves} MOVIMENTO(S) RESTANTE(S)
        </Typography>
        <Button
          color={"error"}
          disabled={remainingMoves === 0}
          onClick={() => {
            handleRoll();
          }}
          sx={{
            cursor: "pointer",
            height: 30,
          }}
          variant={"contained"}
        >
          ROLL
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
