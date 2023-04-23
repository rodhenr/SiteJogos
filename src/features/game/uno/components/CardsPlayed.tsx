import { Box } from "@mui/material";

import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

function CardsPlayed() {
  const lastCard = useSelector((state: RootState) => state.uno.lastCard);

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
      <img src={`./images/${lastCard}.png`} alt={lastCard ?? "card"} />
    </Box>
  );
}

export default CardsPlayed;
