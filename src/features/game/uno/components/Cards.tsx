import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

interface IProps {
  position: string;
}

function Cards({ position }: IProps) {
  const dispatch = useDispatch();
  

  return (
    <Box className={result.class2}>
      {(position === "right" || position === "bottom") && (
        <Typography>{result.id.toUpperCase()}</Typography>
      )}
      <Box className={result.class}>
        {findData(result.cardsArray, position)}
      </Box>
      {(position === "left" || position === "top") && (
        <Typography>{result.id.toUpperCase()}</Typography>
      )}
    </Box>
  );
}

export default Cards;
