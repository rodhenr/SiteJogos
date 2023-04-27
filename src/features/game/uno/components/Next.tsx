import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

import { Box, Typography } from "@mui/material";

function Next() {
  const nextPlayer = useSelector((state: RootState) => state.uno.nextPlayer);

  return (
    <Box
      alignItems={"center"}
      bgcolor={"rgb(90, 66, 185)"}
      borderRadius={1}
      color={"white"}
      display={"flex"}
      height={30}
      justifyContent={"center"}
      width={150}
    >
      <Typography fontSize={14}>Turno atual: {nextPlayer}</Typography>
    </Box>
  );
}

export default Next;
