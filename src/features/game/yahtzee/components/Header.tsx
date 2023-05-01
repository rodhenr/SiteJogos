import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

import { Box, Button, Typography } from "@mui/material";

function Header() {
  const dispatch = useDispatch();
  const dices = useSelector((state: RootState) => state.yahtzee.currentDices);
  const remainingMoves = useSelector(
    (state: RootState) => state.yahtzee.remainingMoves
  );

  const handleFreezeDie = (dieNumber: number) => {};

  const handleRoll = () => {};

  return (
    <Box
      alignItems={"center"}
      bgcolor={"secondary.main"}
      display={"flex"}
      justifyContent={"CENTER"}
      width={"100%"}
    >
      <Box
        alignItems={"center"}
        borderRadius={"10px"}
        display={"flex"}
        flex={1}
        height={"100%"}
        justifyContent={"center"}
      >
        {dices.map((dice: any, index: number) => {
          return (
            <Box
              alignItems={"center"}
              display={"flex"}
              flexDirection={"column"}
              px={0.7}
              py={0.5}
              sx={{
                "& img": {
                  bgcolor: "#fff",
                  cursor: "pointer",
                  height: 30,
                },
                "& p": {
                  color: "#fff",
                  fontSize: 12,
                  margin: 0,
                },
              }}
              key={index}
              onClick={() => {
                handleFreezeDie(index);
              }}
            >
              <img src={`/images/dice${dice}.svg`} alt={`dice_${dice}`} />
              <Typography>{dice}</Typography>
            </Box>
          );
        })}
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{ marginTop: "0.8rem" }}
      >
        <Box borderRadius={"10px"} px={0.8} py={0.6}>
          <Typography>{remainingMoves} MOVIMENTO(S) RESTANTE(S)</Typography>
        </Box>
        <Button
          onClick={() => {
            handleRoll();
          }}
          sx={{
            cursor: "pointer",
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
