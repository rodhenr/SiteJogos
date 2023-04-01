import { Box, Typography } from "@mui/material";

function ErrorMessage() {
  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      flex={1}
      justifyContent={"center"}
    >
      <Typography color={"#FFF"} m={0}>
        Ocorreu um erro no servidor...
      </Typography>
    </Box>
  );
}

export default ErrorMessage;
