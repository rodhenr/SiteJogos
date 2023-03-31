import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { IError, useLoginMutation } from "../authApiSlice";
import {
  changeLoginModal,
  changeRegisterModal,
} from "../../sidebar/modalSlice";
import { addToken } from "../authSlice";
import { RootState } from "../../../app/store";

import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, CircularProgress, Modal, TextField } from "@mui/material";

import styles from "../styles/LoginModal.module.scss";

interface IState {
  user: { value: string; error: boolean; minLength: number };
  password: { value: string; error: boolean; minLength: number };
}

function LoginModal() {
  const loginModalState = useSelector(
    (state: RootState) => state.modals.loginModal
  );
  const dispatch = useDispatch();

  const [reqError, setReqError] = useState("");
  const [loginData, setLoginData] = useState<IState>({
    user: { value: "", error: false, minLength: 4 },
    password: { value: "", error: false, minLength: 8 },
  });

  const [login, { isLoading }] = useLoginMutation();

  const handleClose = () => {
    setReqError("");

    dispatch(changeLoginModal(false));

    setLoginData({
      user: { value: "", error: false, minLength: 4 },
      password: { value: "", error: false, minLength: 8 },
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReqError("");

    const { name, value } = event.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name as keyof IState],
        value: value,
        error: false,
      },
    }));
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      loginData.user.value.length < loginData.user.minLength ||
      loginData.password.value.length < loginData.password.minLength
    ) {
      for (let data in loginData) {
        if (
          loginData[data as keyof IState].value.length <
          loginData[data as keyof IState].minLength
        ) {
          setLoginData((prev) => ({
            ...prev,
            [data]: {
              ...prev[data as keyof IState],
              error: true,
            },
          }));
        }
      }

      return;
    }

    try {
      setReqError("");

      const reqData = await login({
        user: loginData.user.value,
        password: loginData.password.value,
      }).unwrap();

      dispatch(addToken(reqData));

      handleClose();
    } catch (err) {
      const error = err as IError;

      if (error.data) {
        setReqError(error.data.message);
      } else {
        setReqError("Ocorreu um erro no servidor");
      }
    }
  };

  const handleChangeRegister = () => {
    handleClose();
    dispatch(changeRegisterModal(true));
  };

  return (
    <div>
      <Modal
        open={loginModalState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.container}>
          <div className={styles.top}>
            <h1 className={styles.title}>LOGIN</h1>
            <div className={styles.closeButton} onClick={handleClose}>
              <CloseIcon />
            </div>
          </div>
          <div className={styles.errorMessage}>
            {reqError && <p>{reqError.toUpperCase()}</p>}
          </div>
          <div className={styles.inputButton}>
            <form className={styles.form} onSubmit={(e) => handleLogin(e)}>
              <TextField
                error={loginData.user.error}
                helperText={
                  loginData.user.error &&
                  `O campo deve conter ao menos ${loginData.user.minLength} caracteres`
                }
                id="filled-basic"
                label="Usuário"
                name={"user"}
                onChange={handleInputChange}
                required
                value={loginData.user.value}
                variant="filled"
              />
              <TextField
                autoComplete="current-password"
                error={loginData.password.error}
                helperText={
                  loginData.password.error &&
                  `O campo deve conter ao menos ${loginData.password.minLength} caracteres`
                }
                id="filled-password-input"
                label="Senha"
                name={"password"}
                onChange={handleInputChange}
                required
                type="password"
                value={loginData.password.value}
                variant="filled"
              />
              <div className={styles.forgotPassword}>
                <p>Esqueceu sua senha?</p>
              </div>
              {isLoading ? (
                <Box
                  sx={{
                    alignItems: "center",
                    backgroundColor: "#ff4c29;",
                    borderRadius: "10px",
                    display: "flex",
                    fontSize: "18px",
                    height: "50px",
                    justifyContent: "center",
                    width: " 100%",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <Button
                  sx={{
                    backgroundColor: "#ff4c29;",
                    borderRadius: "10px",
                    fontSize: "18px",
                    height: "50px",
                    ":hover": {
                      backgroundColor: "#cb3b1e;",
                    },
                  }}
                  type="submit"
                  variant={"contained"}
                >
                  Faça Login
                </Button>
              )}
            </form>
          </div>
          <div className={styles.register} onClick={handleChangeRegister}>
            <p>Não tem uma conta? Cadastre-se</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default LoginModal;
