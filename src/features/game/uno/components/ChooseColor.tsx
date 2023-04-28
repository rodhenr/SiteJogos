import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setChooseColor, setChoosedCard, setData } from "../unoSlice";
import { useUnoPlayerMoveMutation } from "../../gameApiSlice";

import { Box, Button, Typography } from "@mui/material";

function ChooseColor() {
  const dispatch = useDispatch();
  const [userMove] = useUnoPlayerMoveMutation();
  const matchID = useSelector((state: RootState) => state.game.matchID);
  const nextPlayer = useSelector((state: RootState) => state.uno.nextPlayer);
  const choosedCard = useSelector((state: RootState) => state.uno.choosedCard);

  const chooseFunc = async (color: string) => {
    if (nextPlayer !== "user" || choosedCard === "") return;

    try {
      const data = await userMove({
        matchID: matchID ?? 0,
        card: choosedCard,
        color,
      }).unwrap();

      dispatch(
        setData({
          color: data.color,
          cpu1CardsLength: data.cpu1CardsLength,
          cpu2CardsLength: data.cpu2CardsLength,
          cpu3CardsLength: data.cpu3CardsLength,
          isClockwise: data.isClockwise,
          lastCard: data.lastCard,
          nextPlayer: data.nextPlayer,
          remainingCardsLength: data.remainingCardsLength,
          remainingPlayers: data.remainingPlayers,
          userCards: data.userCards,
        })
      );

      dispatch(setChoosedCard(""));
      dispatch(setChooseColor(false));
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Box
      alignItems={"center"}
      bgcolor={"secondary.dark"}
      boxSizing={"border-box"}
      borderRadius={"12px"}
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      height={200}
      left={"50%"}
      py={1.5}
      position={"absolute"}
      sx={{
        transform: "translate(-50%, -50%)",
      }}
      top={"50%"}
      width={220}
    >
      <Typography color={"white"} fontSize={18} sx={{ justifySelf: "center" }}>
        Escolha uma cor
      </Typography>
      <Box
        alignItems={"center"}
        boxSizing={"border-box"}
        display={"grid"}
        flex={1}
        gap={1}
        justifyContent={"center"}
        px={1}
        sx={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "1fr",
        }}
        width={"100%"}
      >
        <Box
          bgcolor={"green"}
          border={"1px solid #fff"}
          height={"100%"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              opacity: 0.7,
            },
          }}
          onClick={() => {
            chooseFunc("green");
          }}
        ></Box>
        <Box
          bgcolor={"yellow"}
          border={"1px solid #fff"}
          height={"100%"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              opacity: 0.7,
            },
          }}
          onClick={() => {
            chooseFunc("yellow");
          }}
        ></Box>
        <Box
          bgcolor={"red"}
          border={"1px solid #fff"}
          height={"100%"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              opacity: 0.7,
            },
          }}
          onClick={() => {
            chooseFunc("red");
          }}
        ></Box>
        <Box
          bgcolor={"blue"}
          border={"1px solid #fff"}
          height={"100%"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              opacity: 0.7,
            },
          }}
          onClick={() => {
            chooseFunc("blue");
          }}
        ></Box>
      </Box>
      <Button
        color={"info"}
        sx={{
          alignItems: "center",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          height: 25,
          justifySelf: "center",
          width: "85%",
        }}
        variant={"contained"}
        onClick={() => {
          dispatch(setChooseColor(false));
        }}
      >
        CANCELAR
      </Button>
    </Box>
  );
}

export default ChooseColor;
