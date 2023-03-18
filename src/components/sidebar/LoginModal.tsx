import { Button, Modal, TextField } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { changeLoginModal } from "../../store/slices/modalSlice";
import { RootState } from "../../store/store";

import styles from "./styles/LoginModal.module.scss";

function LoginModal() {
  const loginModalState = useSelector(
    (state: RootState) => state.modals.loginModal
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(changeLoginModal(false));
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
          <div className={styles.inputButton}>
            <TextField id="filled-basic" label="Usuário" variant="filled" />
            <TextField
              id="filled-password-input"
              label="Senha"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <Button color="primary" type="button" variant={"contained"}>
              Faça Login
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default LoginModal;
