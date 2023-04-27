import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setChooseColor, setData } from "../unoSlice";
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

      dispatch(setChooseColor(false));
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Box
      bgcolor={"#431386"}
      boxSizing={"border-box"}
      borderRadius={"12px"}
      display={"grid"}
      gap={1}
      height={220}
      left={"50%"}
      py={2}
      position={"absolute"}
      sx={{
        gridTemplateRows: "0.2fr 0.6fr 0.2fr",
        transform: "translate(-50%, -50%)",
      }}
      top={"50%"}
      width={220}
    >
      <Typography>Escolha uma cor</Typography>
      <Box alignItems={"center"} display={"flex"} gap={1} px={1}>
        <Box
          bgcolor={"green"}
          border={"1px solid #fff"}
          height={"100px"}
          sx={{ cursor: "pointer" }}
          width={"100%"}
          onClick={() => {
            chooseFunc("green");
          }}
        ></Box>
        <Box
          bgcolor={"yellow"}
          border={"1px solid #fff"}
          height={"100px"}
          sx={{ cursor: "pointer" }}
          width={"100%"}
          onClick={() => {
            chooseFunc("yellow");
          }}
        ></Box>
        <Box
          bgcolor={"red"}
          border={"1px solid #fff"}
          height={"100px"}
          sx={{ cursor: "pointer" }}
          width={"100%"}
          onClick={() => {
            chooseFunc("red");
          }}
        ></Box>
        <Box
          bgcolor={"blue"}
          border={"1px solid #fff"}
          height={"100px"}
          sx={{ cursor: "pointer" }}
          width={"100%"}
          onClick={() => {
            chooseFunc("blue");
          }}
        ></Box>
      </Box>
      <Button
        sx={{
          alignItems: "center",
          borderRadius: "8px",
          color: "rgba(0, 0, 0, 0.65)",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          gap: 1,
          height: 25,
          justifySelf: "center",
          width: "85%",
        }}
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
