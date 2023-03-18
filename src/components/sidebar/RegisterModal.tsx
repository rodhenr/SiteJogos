import { Button, Modal, TextField } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { changeRegisterModal } from "../../store/slices/modalSlice";
import { RootState } from "../../store/store";

import styles from "./styles/RegisterModal.module.scss";

function RegisterModal() {
  const registerModalState = useSelector(
    (state: RootState) => state.modals.registerModal
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(changeRegisterModal(false));
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
          <div className={styles.inputButton}>
            <div className={styles.fields}>
              <TextField
                id="filled-basic"
                label="Usuário"
                variant="filled"
                required
              />
              <TextField
                id="filled-password-input"
                label="Senha"
                type="password"
                autoComplete="current-password"
                variant="filled"
                required
              />
              <TextField
                id="filled-password-input"
                label="Confirme a senha"
                type="password"
                autoComplete="current-password"
                variant="filled"
                required
              />
            </div>

            <Button color="primary" type="button" variant={"contained"}>
              Registrar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default RegisterModal;
