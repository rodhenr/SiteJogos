import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { IError, useLoginMutation } from "../authApiSlice";
import { changeLoginModal, changeRegisterModal } from "../authSlice";
import { addToken } from "../authSlice";
import { RootState } from "../../../app/store";

import { Box, TextField, Typography, useTheme } from "@mui/material";

import Form from "./Form";
import AuthModalContainer from "./AuthModalContainer";

export interface IState {
  user: { value: string; error: boolean; minLength: number };
  password: { value: string; error: boolean; minLength: number };
}

function LoginModal() {
  const theme = useTheme();
  const loginModalState = useSelector(
    (state: RootState) => state.auth.loginModal
  );
  const dispatch = useDispatch();

  const [reqError, setReqError] = useState("");
  const [loginData, setLoginData] = useState<IState>({
    user: { value: "", error: false, minLength: 4 },
    password: { value: "", error: false, minLength: 8 },
  });

  const [login, { isLoading, isError }] = useLoginMutation();

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
    <AuthModalContainer
      isLoading={isLoading}
      isError={isError}
      handleClose={handleClose}
      openState={loginModalState}
      handleSwitcher={handleChangeRegister}
      reqError={reqError}
      switcherText={"Não tem uma conta? Cadastre-se"}
      title={"LOGIN"}
    >
      <Form
        buttonText={"Faça Login"}
        handleForm={handleLogin}
        isLoading={isLoading}
      >
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

        <Box display={"flex"} justifyContent={"flex-end"} width={"100%"}>
          <Typography
            color={theme.palette.info.light}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Esqueceu sua senha?
          </Typography>
        </Box>
      </Form>
    </AuthModalContainer>
  );
}

export default LoginModal;
