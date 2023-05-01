import { useSelector } from "react-redux";

import { Box, Typography } from "@mui/material";
import { RootState } from "../../../../app/store";

function Score() {
  const score = useSelector((state: RootState) => state.yahtzee.points);

  return (
    <Box
      alignItems={"center"}
      bgcolor={"secondary.main"}
      display={"flex"}
      justifyContent={"center"}
      py={2}
      sx={{
        "& p": {
          color: "#fff",
          fontSize: 20,
        },
      }}
      width={"100%"}
    >
      <Typography>PONTOS: {score ?? 0}</Typography>
    </Box>
  );
}

export default Score;
