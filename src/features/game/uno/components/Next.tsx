import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

import { Box, Typography } from "@mui/material";

function Next() {
  const nextPlayer = useSelector((state: RootState) => state.uno.nextPlayer);

  return (
    <Box
      alignItems={"center"}
      bgcolor={"info.dark"}
      borderRadius={1}
      color={"white"}
      display={"flex"}
      height={30}
      justifyContent={"center"}
      sx={{ width: { mobile: 100, tablet: 130, laptop: 150 } }}
    >
      <Typography sx={{ fontSize: { mobile: 12, laptop: 14 } }}>
        Turno atual: {nextPlayer}
      </Typography>
    </Box>
  );
}

export default Next;
