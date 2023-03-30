import { useDispatch } from "react-redux";

import { changeLoginModal, changeRegisterModal } from "../sidebar/modalSlice";

import { Button } from "@mui/material";

import styles from "./styles/Auth.module.scss";

function Index() {
  const dispatch = useDispatch();

  const handleClick = (tipo: string) => {
    if (tipo === "Login") {
      dispatch(changeLoginModal(true));
    } else if (tipo === "Registro") {
      dispatch(changeRegisterModal(true));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.register}>
        <p>Quer salvar seu progresso e subir nos rankings do site?</p>
        <Button
          variant={"contained"}
          color={"success"}
          size={"small"}
          onClick={() => handleClick("Registro")}
        >
          Cadastre-se agora!
        </Button>
      </div>
      <div className={styles.login}>
        <p>Já possui uma conta?</p>
        <Button
          variant={"contained"}
          size={"small"}
          onClick={() => handleClick("Login")}
        >
          FAÇA LOGIN
        </Button>
      </div>
    </div>
  );
}

export default Index;
