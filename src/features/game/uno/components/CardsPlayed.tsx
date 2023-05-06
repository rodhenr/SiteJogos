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
        width: { mobile: 50, tablet: 80, laptop: 90, desktop: 100 },

        "& img": {
          height: { mobile: 80, tablet: 110, laptop: 130, desktop: 150 },
        },
      }}
    >
      {!lastCard ? (
        <Box
          bgcolor={"green"}
          border={"1px solid black"}
          borderRadius={2}
          sx={{ height: { mobile: 80, desktop: 150 } }}
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
