import { Button, Modal, TextField } from "@mui/material";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { IError, useRegisterUserMutation } from "../../store/api/authApiSlice";
import { changeRegisterModal } from "../../store/slices/modalSlice";
import { RootState } from "../../store/store";

import styles from "./styles/RegisterModal.module.scss";

function RegisterModal() {
  const registerModalState = useSelector(
    (state: RootState) => state.modals.registerModal
  );
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    user: "",
    password: "",
    confirmationPassword: "",
  });
  const [reqError, setReqError] = useState<string>("");

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleClose = () => {
    setReqError("");
    dispatch(changeRegisterModal(false));
    setFormData({ name: "", user: "", password: "", confirmationPassword: "" });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReqError("");
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.password !== formData.confirmationPassword) {
      setReqError("As senhas não coincidem");
      return;
    }

    try {
      await registerUser({
        name: formData.name,
        user: formData.user,
        password: formData.password,
      }).unwrap();
      handleClose();
    } catch (err) {
      const error = err as IError;

      setReqError(error.data.message);
    }
  };

  return (
    <div>
      <Modal
        open={registerModalState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.container}>
          <h1 className={styles.title}>REGISTRO</h1>
          {reqError && (
            <div className={styles.errorMessage}>
              <p>{reqError.toUpperCase()}</p>
            </div>
          )}
          <div className={styles.inputButton}>
            <form className={styles.fields} onSubmit={(e) => handleSubmit(e)}>
              <TextField
                id="filled-basic-name"
                label="Nome"
                name="name"
                onChange={handleInputChange}
                required
                value={formData.name}
                variant="filled"
              />
              <TextField
                id="filled-basic-user"
                label="Usuário"
                name="user"
                onChange={handleInputChange}
                required
                value={formData.user}
                variant="filled"
              />
              <TextField
                autoComplete="current-password"
                id="filled-password-input"
                label="Senha"
                name="password"
                onChange={handleInputChange}
                required
                type="password"
                value={formData.password}
                variant="filled"
              />
              <TextField
                autoComplete="current-password"
                id="filled-confirm-password-input"
                label="Confirme a senha"
                name="confirmationPassword"
                onChange={handleInputChange}
                required
                type="password"
                value={formData.confirmationPassword}
                variant="filled"
              />

              <Button color="primary" type="submit" variant={"contained"}>
                Registrar
              </Button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default RegisterModal;
