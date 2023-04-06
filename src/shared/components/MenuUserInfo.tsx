import { Avatar, Box, Typography } from "@mui/material";

import MessageIcon from "@mui/icons-material/Message";

function MenuUserInfo() {
  const logged: boolean = false;

  return (
    <Box alignItems={"center"} display={"flex"} gap={6} sx={{ color: "#FFF" }}>
      {logged ? (
        <>
          <MessageIcon sx={{ fontSize: "25px" }} />
          <Box display={"flex"} gap={1} justifyContent={"center"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-end"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                sx={{
                  "& p": {
                    fontSize: "12px",
                  },
                }}
              >
                <Typography>Nível 5</Typography>
                <Typography>700/1500</Typography>
              </Box>
              <Box bgcolor={"#FFF"} height={"8px"} width={"200px"}></Box>
            </Box>
            <Avatar sx={{ height: "45px", width: "45px" }} />
          </Box>
        </>
      ) : (
        <Box>
          <Box>LOGAR</Box>
        </Box>
      )}
    </Box>
  );
}

export default MenuUserInfo;
