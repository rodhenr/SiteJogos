import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { useYahtzeeRollMutation } from "../../gameApiSlice";
import { changeDicesState, setYahtzeeData } from "../yahtzeeSlice";

import { Box, Button, Typography } from "@mui/material";

import { v4 as uuidv4 } from "uuid";

function Header() {
  const dispatch = useDispatch();
  const dicesState = useSelector(
    (state: RootState) => state.yahtzee.dicesState
  );
  const matchID = useSelector((state: RootState) => state.yahtzee.matchID);
  const dices = useSelector((state: RootState) => state.yahtzee.currentDices);
  const remainingMoves = useSelector(
    (state: RootState) => state.yahtzee.remainingMoves
  );
  const [roll] = useYahtzeeRollMutation();

  const handleFreezeDie = (dieNumber: number) => {
    dispatch(changeDicesState(dieNumber));
  };

  const handleRoll = async () => {
    if (remainingMoves === 0) return;

    try {
      const data = await roll({
        matchID: matchID ?? 0,
        dices: dicesState,
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
      py={1}
      sx={{
        flexDirection: { mobile: "column", desktop: "row" },
        gap: { mobile: 1, desktop: 0 },
        minHeight: { mobile: 90, desktop: 80 },
      }}
      width={"100%"}
    >
      <Box
        alignItems={"center"}
        boxSizing={"border-box"}
        display={"flex"}
        flex={1}
        sx={{
          gap: { mobile: 1, desktop: 0 },
          justifyContent: { mobile: "space-between", desktop: "space-around" },
          px: { mobile: 1, desktop: 0.5 },
          width: { mobile: "100%", desktop: "auto" },
        }}
      >
        {dices.map((dice: number, index: number) => {
          return (
            <Box
              boxSizing={"border-box"}
              sx={{
                "& img": {
                  bgcolor: "#fff",
                  borderRadius: "10px",
                  cursor: "pointer",
                  height: { mobile: 50, desktop: 60 },
                  opacity: !dicesState[index] ? 1 : 0.7,
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
        alignItems={"center"}
        boxSizing={"border-box"}
        display={"flex"}
        gap={1}
        px={1}
        sx={{
          flexDirection: { mobile: "row", desktop: "column" },
          justifyContent: { mobile: "space-between", desktop: "center" },
          width: { mobile: "100%", desktop: "auto" },
        }}
      >
        <Typography
          color={"white"}
          sx={{ fontSize: { mobile: 13, desktop: 14 } }}
          textAlign={"center"}
        >
          <span style={{ fontWeight: "bold" }}>{remainingMoves}</span>{" "}
          MOVIMENTO(S) RESTANTE(S)
        </Typography>
        <Button
          color={"error"}
          disabled={remainingMoves === 0}
          onClick={() => {
            handleRoll();
          }}
          sx={{
            cursor: "pointer",
            height: { mobile: 25, desktop: 30 },
            width: { mobile: 30, desktop: "auto" },
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
