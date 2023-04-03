import { useDispatch } from "react-redux";

import { changeLoginModal, changeRegisterModal } from "./authSlice";

import { Box, Button, Typography } from "@mui/material";

import styles from "./styles/Auth.module.scss";

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
    <Box className={styles.container}>
      <Box className={styles.register}>
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
      <Box className={styles.login}>
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
