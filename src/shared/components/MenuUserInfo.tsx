import { useDispatch, useSelector } from "react-redux";
import {
  changeLoginModal,
  changeRegisterModal,
} from "../../features/auth/authSlice";
import { RootState } from "../../app/store";
import { useGetPlayerBasicInfoQuery } from "../../features/sidebar/userInfoApiSlice";

import { Avatar, Box, Button, Typography } from "@mui/material";

function MenuUserInfo() {
  const dispatch = useDispatch();
  const hasToken = useSelector((state: RootState) => state.auth.token);

  const { data, isSuccess, isLoading, isError } = useGetPlayerBasicInfoQuery();

  const handleAuthModalState = (isLogin: boolean) => {
    if (isLogin) {
      dispatch(changeLoginModal(true));
    } else {
      dispatch(changeRegisterModal(true));
    }
  };

  return (
    <Box alignItems={"center"} display={"flex"} gap={6} sx={{ color: "#FFF" }}>
      {hasToken ? (
        <>
          <Box display={"flex"} gap={1} justifyContent={"center"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-end"}
            >
              <Typography fontSize={"15px"}>RODRIGO HENRIQUE</Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                sx={{
                  "& p": {
                    fontSize: "11px",
                  },
                }}
              >
                <Typography>Nível 5</Typography>
                <Typography>700/1500</Typography>
              </Box>
              <Box bgcolor={"#FFF"} height={"5px"} width={"200px"}></Box>
            </Box>
            <Avatar sx={{ height: "48px", width: "48px" }} />
            <Button color={"primary"} variant={"contained"}>SAIR</Button>
          </Box>
        </>
      ) : (
        <Box display={"flex"} gap={1}>
          <Button
            color={"primary"}
            variant={"contained"}
            onClick={() => handleAuthModalState(true)}
          >
            LOGIN
          </Button>
          <Button
            color={"success"}
            variant={"contained"}
            onClick={() => handleAuthModalState(false)}
          >
            REGISTRO
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default MenuUserInfo;
