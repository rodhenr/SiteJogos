import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { IError, useLoginMutation } from "../../store/api/authApiSlice";
import { changeLoginModal } from "../../store/slices/modalSlice";
import { addToken } from "../../store/slices/authSlice";

import { Button, Modal, TextField } from "@mui/material";

import { RootState } from "../../store/store";

import styles from "./styles/LoginModal.module.scss";

function LoginModal() {
  const loginModalState = useSelector(
    (state: RootState) => state.modals.loginModal
  );
  const dispatch = useDispatch();

  const [reqError, setReqError] = useState<string>("");
  const [loginData, setLoginData] = useState({ user: "", password: "" });

  const [login, { isLoading }] = useLoginMutation();

  const handleClose = () => {
    setReqError("");
    dispatch(changeLoginModal(false));
    setLoginData({ user: "", password: "" });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReqError("");
    const { name, value } = event.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const reqData = await login({
        user: loginData.user,
        password: loginData.password,
      }).unwrap();

      dispatch(addToken(reqData));

      handleClose();
    } catch (err) {
      const error = err as IError;

      setReqError(error.data.message);
    }
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
          <h1 className={styles.title}>LOGIN</h1>
          {reqError && (
            <div className={styles.errorMessage}>
              <p>{reqError.toUpperCase()}</p>
            </div>
          )}
          <div className={styles.inputButton}>
            <TextField
              id="filled-basic"
              label="Usuário"
              name={"user"}
              onChange={handleInputChange}
              value={loginData.user}
              variant="filled"
            />
            <TextField
              autoComplete="current-password"
              id="filled-password-input"
              label="Senha"
              name={"password"}
              onChange={handleInputChange}
              type="password"
              value={loginData.password}
              variant="filled"
            />
            <Button
              color="primary"
              onClick={handleLogin}
              type="button"
              variant={"contained"}
            >
              Faça Login
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default LoginModal;
