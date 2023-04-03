import { useDispatch } from "react-redux";

import { changeLoginModal, changeRegisterModal } from "./authSlice";

import { Box, Button, Typography } from "@mui/material";

function Index() {
  const dispatch = useDispatch();

  const handleClick = (isLogin: boolean) => {
    if (isLogin) {
      dispatch(changeLoginModal(true));
    } else {
      dispatch(changeRegisterModal(true));
    }
  };

  return (
    <Box
      alignItems={"center"}
      color={"#FFF"}
      display={"flex"}
      flexDirection={"column"}
      fontSize={"16px"}
      gap={2}
      height={"100%"}
      justifyContent={"center"}
      textAlign={"center"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        justifyContent={"center"}
      >
        <Typography>
          Quer salvar seu progresso e subir nos rankings do site?
        </Typography>
        <Button
          variant={"contained"}
          color={"success"}
          size={"small"}
          onClick={() => handleClick(false)}
        >
          Cadastre-se agora!
        </Button>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        justifyContent={"center"}
      >
        <Typography>Já possui uma conta?</Typography>
        <Button
          variant={"contained"}
          size={"small"}
          onClick={() => handleClick(true)}
        >
          FAÇA LOGIN
        </Button>
      </Box>
    </Box>
  );
}

export default Index;
