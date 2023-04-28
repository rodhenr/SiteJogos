import { Box } from "@mui/material";

interface Props {
  cardType: string;
  isPlayer: boolean;
  position: string;
}

function Card({ cardType, isPlayer, position }: Props) {
  return isPlayer ? (
    <Box
      borderTop={"3px solid #291348"}
      borderRadius={"10px"}
      display={"flex"}
      height={"160px"}
      justifyContent={"center"}
      px={0.5}
      position={"relative"}
      width={"400px"}
    >
      <img src={`./images/${cardType}.png`} alt={cardType} />
    </Box>
  ) : position === "left" ? (
    <Box
      borderRight={"3px solid #9d5df7"}
      borderRadius={"10px"}
      display={"flex"}
      flexDirection={"column"}
      height={"400px"}
      position={"relative"}
      width={"110px"}
    >
      <img src={`./images/${cardType}.png`} alt={cardType} />
    </Box>
  ) : position === "right" ? (
    <Box
      borderLeft={"3px solid #9d5df7"}
      borderRadius={"10px"}
      display={"flex"}
      flexDirection={"column"}
      height={"400px"}
      position={"relative"}
      width={"110px"}
    >
      <img src={`./images/${cardType}.png`} alt={cardType} />
    </Box>
  ) : (
    <Box
      borderBottom={"3px solid #9d5df7"}
      borderRadius={"10px"}
      boxSizing={"border-box"}
      display={"flex"}
      height={"160px"}
      justifyContent={"center"}
      px={0.5}
      position={"relative"}
      width={"400px"}
    >
      <img src={`./images/${cardType}.png`} alt={cardType} />
    </Box>
  );
}

export default Card;
