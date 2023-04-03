import { Box, Typography } from "@mui/material";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

function UserRegistered() {
  return (
    <>
      <Box
        alignItems={"center"}
        bgcolor={"#278b0e"}
        boxSizing={"border-box"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        height={"120px"}
        position={"relative"}
        width={"100%"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          sx={{
            "&:svg": {
              color: "#FFF",
              fontSize: "80px",
            },
          }}
          width={"100%"}
        >
          <CheckCircleOutlineRoundedIcon />
        </Box>
      </Box>
      <Box
        alignItems={"center"}
        boxSizing={"border-box"}
        display={"flex"}
        flex={1}
        justifyContent={"center"}
        p={1}
        width={"100%"}
      >
        <Typography
          color={"#278b0e"}
          fontFamily={"'Montserrat', sans-serif"}
          fontSize={"32px"}
          margin={"0"}
          sx={{ wordWrap: "break-word" }}
          textAlign={"center"}
        >
          Você se registrou com sucesso!
        </Typography>
      </Box>
    </>
  );
}

export default UserRegistered;
