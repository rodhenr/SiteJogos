import { Box, Typography } from "@mui/material";

function MatchTitle() {
  return (
    <Box
      bgcolor={"#111316"}
      borderRadius={"10px"}
      color={"#FFF"}
      display={"flex"}
      justifyContent="center"
      py={0.5}
    >
      <Typography flex={1} fontSize={"15px"} textAlign={"center"}>
        DATA
      </Typography>
      <Typography flex={1} fontSize={"15px"} textAlign={"center"}>
        JOGO
      </Typography>
      <Typography flex={1} fontSize={"15px"} textAlign={"center"}>
        RESULTADO
      </Typography>
    </Box>
  );
}

export default MatchTitle;
