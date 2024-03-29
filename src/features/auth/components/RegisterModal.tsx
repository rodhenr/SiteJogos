import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { IError, useRegisterUserMutation } from "../authApiSlice";
import { changeLoginModal, changeRegisterModal } from "../authSlice";
import { RootState } from "../../../app/store";

import { Modal, TextField } from "@mui/material";

import AuthModalContainer from "./AuthModalContainer";
import Form from "./Form";
import UserRegistered from "./UserRegistered";

interface IState {
  name: { value: string; error: boolean; minLength: number };
  user: { value: string; error: boolean; minLength: number };
  password: { value: string; error: boolean; minLength: number };
  confirmationPassword: { value: string; error: boolean; minLength: number };
}

function RegisterModal() {
  const registerModalState = useSelector(
    (state: RootState) => state.auth.registerModal
  );
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<IState>({
    name: { value: "", error: false, minLength: 4 },
    user: { value: "", error: false, minLength: 4 },
    password: { value: "", error: false, minLength: 8 },
    confirmationPassword: { value: "", error: false, minLength: 8 },
  });
  const [reqError, setReqError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();

  const handleClose = () => {
    setReqError("");

    dispatch(changeRegisterModal(false));

    setFormData({
      name: { value: "", error: false, minLength: 4 },
      user: { value: "", error: false, minLength: 4 },
      password: { value: "", error: false, minLength: 8 },
      confirmationPassword: { value: "", error: false, minLength: 8 },
    });

    setIsSuccess(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReqError("");

    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name as keyof IState],
        value: value,
        error: false,
      },
    }));
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      formData.name.value.length < formData.name.minLength ||
      formData.user.value.length < formData.user.minLength ||
      formData.password.value.length < formData.password.minLength ||
      formData.confirmationPassword.value.length <
        formData.confirmationPassword.minLength
    ) {
      for (let data in formData) {
        if (
          formData[data as keyof IState].value.length <
          formData[data as keyof IState].minLength
        ) {
          setFormData((prev) => ({
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

    if (formData.password.value !== formData.confirmationPassword.value) {
      setReqError("As senhas não coincidem");

      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(formData.name.value.trim())) {
      setReqError("O nome possui caracteres especiais e portanto não é válido");
      setFormData((prev) => ({
        ...prev,
        name: {
          ...prev.name,
          error: true,
        },
      }));

      return;
    }

    if (!/^[a-zA-Z]+$/.test(formData.user.value.trim())) {
      setReqError(
        "O usuário possui caracteres especiais e portanto não é válido"
      );
      setFormData((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          error: true,
        },
      }));

      return;
    }

    try {
      setReqError("");

      await registerUser({
        name: formData.name.value,
        user: formData.user.value,
        password: formData.password.value,
      }).unwrap();

      setIsSuccess(true);
    } catch (err) {
      const error = err as IError;

      if (error.data) {
        setReqError(error.data.message);
      } else {
        setReqError("Erro no servidor");
      }
    }
  };

  const handleChangeLogin = () => {
    handleClose();
    dispatch(changeLoginModal(true));
  };

  return (
    <>
      {isSuccess ? (
        <Modal
          open={registerModalState}
          onClose={handleClose}
          aria-labelledby="modal-matches"
          aria-describedby="modal-matches-history"
        >
          <UserRegistered handleClose={handleClose} />
        </Modal>
      ) : (
        <AuthModalContainer
          isLoading={isLoading}
          isError={isError}
          handleClose={handleClose}
          openState={registerModalState}
          handleSwitcher={handleChangeLogin}
          reqError={reqError}
          switcherText={"Já possui uma conta? Faça login!"}
          title={"REGISTRO"}
        >
          <Form
            buttonText={"Registrar"}
            handleForm={handleRegister}
            isLoading={isLoading}
          >
            <TextField
              error={formData.name.error}
              helperText={
                formData.name.error &&
                `O campo deve conter ao menos ${formData.name.minLength} caracteres`
              }
              id="filled-basic-name"
              label="Nome"
              name="name"
              onChange={handleInputChange}
              required
              value={formData.name.value}
              variant="filled"
            />
            <TextField
              error={formData.user.error}
              helperText={
                formData.user.error &&
                `O campo deve conter ao menos ${formData.user.minLength} caracteres`
              }
              id="filled-basic-user"
              label="Usuário"
              name="user"
              onChange={handleInputChange}
              required
              value={formData.user.value}
              variant="filled"
            />
            <TextField
              autoComplete="current-password"
              error={formData.password.error}
              helperText={
                formData.password.error &&
                `O campo deve conter ao menos ${formData.password.minLength} caracteres`
              }
              id="filled-password-input"
              label="Senha"
              name="password"
              onChange={handleInputChange}
              required
              type="password"
              value={formData.password.value}
              variant="filled"
            />
            <TextField
              autoComplete="current-password"
              error={formData.confirmationPassword.error}
              helperText={
                formData.confirmationPassword.error &&
                `O campo deve conter ao menos ${formData.confirmationPassword.minLength} caracteres`
              }
              id="filled-confirm-password-input"
              label="Confirme a senha"
              name="confirmationPassword"
              onChange={handleInputChange}
              required
              type="password"
              value={formData.confirmationPassword.value}
              variant="filled"
            />
          </Form>
        </AuthModalContainer>
      )}{" "}
    </>
  );
}

export default RegisterModal;
