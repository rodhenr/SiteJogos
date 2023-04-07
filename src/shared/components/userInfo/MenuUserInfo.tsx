import { useDispatch } from "react-redux";
import {
  changeLoginModal,
  changeRegisterModal,
} from "../../../features/auth/authSlice";
import { useGetPlayerBasicInfoQuery } from "../../userInfoApiSlice";
import { changeProfileModal } from "../../modalSlice";

import { Avatar, Box, Button, Typography } from "@mui/material";

import ExpInfo from "./ExpInfo";

function MenuUserInfo() {
  const dispatch = useDispatch();

  const { data, isSuccess } = useGetPlayerBasicInfoQuery();

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

  return (
    <Box alignItems={"center"} display={"flex"} gap={6} sx={{ color: "#FFF" }}>
      {isSuccess ? (
        <>
          <Box
            alignContent={"center"}
            display={"flex"}
            gap={1}
            justifyContent={"center"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-end"}
            >
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
            <Avatar
              alt="User Avatar"
              onClick={handleProfileModalState}
              src={data.avatar}
              sx={{
                height: "48px",
                width: "48px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
            {/* <Button
              color={"primary"}
              sx={{
                fontSize: "11px",
                height: "30px",
              }}
              variant={"contained"}
            >
              SAIR
            </Button> */}
          </Box>
        </>
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
