import { Box } from "@mui/material";

import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

function CardsPlayed() {
  const lastCard = useSelector((state: RootState) => state.uno.lastCard);
  const color = useSelector((state: RootState) => state.uno.color);

  const getSpecialCardName = () => {
    let cardName = lastCard?.replace(/\d+/g, "");
    cardName = `${cardName}${color?.charAt(0).toUpperCase()}${color?.slice(1)}`;

    return cardName;
  };

  return (
    <Box
      height={150}
      sx={{
        "& img": {
          height: 150,
        },
      }}
      width={100}
    >
      {!lastCard ? (
        <Box
          bgcolor={"green"}
          border={"1px solid black"}
          borderRadius={2}
          height={"100%"}
          width={"100%"}
        ></Box>
      ) : lastCard.startsWith("plusFour") ? (
        <img
          src={`/images/${getSpecialCardName()}.png`}
          alt={getSpecialCardName()}
        />
      ) : lastCard.startsWith("changeColor") ? (
        <img
          src={`/images/${getSpecialCardName()}.png`}
          alt={getSpecialCardName()}
        />
      ) : (
        <img src={`/images/${lastCard}.png`} alt={lastCard} />
      )}
    </Box>
  );
}

export default CardsPlayed;
