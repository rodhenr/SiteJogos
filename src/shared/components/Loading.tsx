import { Box, CircularProgress } from "@mui/material";

function Loading() {
  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      justifyContent={"center"}
      height={"100%"}
      width={"100%"}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loading;
