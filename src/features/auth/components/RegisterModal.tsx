import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { IError, useRegisterUserMutation } from "../authApiSlice";
import { changeLoginModal, changeRegisterModal } from "../authSlice";
import { RootState } from "../../../app/store";

import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import {
  Box,
  Button,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import styles from "../styles/RegisterModal.module.scss";

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

  const [registerUser, { isLoading }] = useRegisterUserMutation();

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
      <Modal
        aria-describedby="modal-modal-description"
        aria-labelledby="modal-modal-title"
        onClose={handleClose}
        open={registerModalState}
      >
        {isSuccess ? (
          <Box className={styles.containerRegistered}>
            <Box className={styles.top}>
              <Box
                className={`${styles.closeButtonContainer} ${styles.registered}`}
              >
                <Box className={styles.closeButton} onClick={handleClose}>
                  <CloseIcon />
                </Box>
              </Box>
              <Box className={styles.checkIcon}>
                <CheckCircleOutlineRoundedIcon />
              </Box>
            </Box>
            <Box className={styles.registeredMessage}>
              <Typography>Você se registrou com sucesso!</Typography>
            </Box>
          </Box>
        ) : (
          <Box className={styles.container}>
            <Box className={styles.closeButtonContainer}>
              <Box className={styles.closeButton} onClick={handleClose}>
                <CloseIcon />
              </Box>
            </Box>
            <Box className={styles.registerContainer}>
              <Box className={styles.title}>
                <h1>REGISTRAR</h1>
              </Box>
              <Box className={styles.errorMessage}>
                {reqError && <Typography>{reqError.toUpperCase()}</Typography>}
              </Box>
              <Box className={styles.inputButton}>
                <form
                  className={styles.form}
                  onSubmit={(e) => handleRegister(e)}
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
                      REGISTRE-SE
                    </Button>
                  )}
                </form>
              </Box>
              <Box className={styles.login} onClick={handleChangeLogin}>
                <Typography>Já possui uma conta? Faça login</Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Modal>
    </>
  );
}

export default RegisterModal;
