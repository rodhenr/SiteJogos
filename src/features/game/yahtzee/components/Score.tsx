import { useSelector } from "react-redux";

import { Box, Typography } from "@mui/material";
import { RootState } from "../../../../app/store";

function Score() {
  const score = useSelector((state: RootState) => state.yahtzee.points);

  return (
    <Box
      alignItems={"center"}
      borderRadius={"0 0 10px 10px"}
      display={"flex"}
      fontSize={32}
      gap={1}
      justifyContent={"center"}
      px={0.5}
      py={2}
      sx={{
        "& p": {
          color: "#fff",
          margin: "0",
        },
      }}
      width={"100%"}
    >
      <Typography>Pontos</Typography>
      <Typography>{score}</Typography>
    </Box>
  );
}

export default Score;
