import { useDispatch, useSelector } from "react-redux";
import {
  changeLoginModal,
  changeRegisterModal,
  logout,
} from "../../../features/auth/authSlice";
import { useGetPlayerBasicInfoQuery } from "../../userInfoApiSlice";
import { changeProfileModal } from "../../modalSlice";
import { RootState } from "../../../app/store";

import { Avatar, Box, Button, Typography } from "@mui/material";

import ExpInfo from "./ExpInfo";

function MenuUserInfo() {
  const dispatch = useDispatch();
  const hasToken = useSelector((state: RootState) => !!state.auth.token);

  const { data, isSuccess } = useGetPlayerBasicInfoQuery(undefined, {
    skip: !hasToken,
  });

  const handleAuthModalState = (isLogin: boolean) => {
    if (isLogin) {
      dispatch(changeLoginModal(true));
    } else {
      dispatch(changeRegisterModal(true));
    }
  };

  const handleProfileModalState = () => {
    dispatch(changeProfileModal(true));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      gap={6}
      sx={{ color: "#FFF" }}
      width={"100%"}
    >
      {hasToken && isSuccess ? (
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <Box alignContent={"center"} display={"flex"} flex={1} gap={1}>
            <Avatar
              alt="User Avatar"
              onClick={handleProfileModalState}
              src={data.avatar}
              sx={{
                alignSelf: "center",
                height: "48px",
                width: "48px",

                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
            <Box display={"flex"} flexDirection={"column"}>
              <Typography fontSize={"15px"}>
                {data.name.toUpperCase()}
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                sx={{
                  "& p": {
                    fontSize: "11px",
                  },
                }}
                width={"100%"}
              >
                <ExpInfo
                  exp={data.experience}
                  isModal={false}
                  level={data.level}
                  maxExpLevel={data.maxExperience}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Button
              color={"info"}
              onClick={handleLogout}
              sx={{
                fontSize: "11px",
                height: "30px",
              }}
              variant={"contained"}
            >
              SAIR
            </Button>
          </Box>
        </Box>
      ) : (
        <Box display={"flex"} gap={1}>
          <Button
            color={"secondary"}
            onClick={() => handleAuthModalState(true)}
            sx={{
              fontSize: "11px",
              height: "30px",
            }}
            variant={"contained"}
          >
            LOGIN
          </Button>
          <Button
            color={"info"}
            sx={{ fontSize: "11px", height: "30px" }}
            onClick={() => handleAuthModalState(false)}
            variant={"contained"}
          >
            REGISTRO
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default MenuUserInfo;
