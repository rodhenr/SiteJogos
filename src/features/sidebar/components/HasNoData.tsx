import { Box, Typography } from "@mui/material";

function HasNoData() {
  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      flex={1}
      justifyContent={"center"}
      my={4}
    >
      <Typography
        color={"#FFF"}
        flex={1}
        fontSize={"15px"}
        textAlign={"center"}
      >
        Nenhuma partida recente
      </Typography>
    </Box>
  );
}

export default HasNoData;
