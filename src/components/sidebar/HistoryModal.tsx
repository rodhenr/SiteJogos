import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { Box, Modal, Typography } from "@mui/material";

import { fakeData } from "../../data/fakeData";

import { changeHistoryModal } from "../../store/slices/modalSlice";

import styles from "./styles/HistoryModal.module.scss";

const style = {
  backgroundColor: "#1b1e23",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  left: "50%",
  maxHeight: "400px",
  overflowY: "auto",
  p: 2,
  position: "absolute" as "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

function HistoryModal() {
  const historyState = useSelector(
    (state: RootState) => state.modals.historyModal
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(changeHistoryModal(false));
  };

  return (
    <div>
      <Modal
        open={historyState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.container} sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: "white", fontSize: "18px", textAlign: "center" }}
          >
            HISTÓRICO DE PARTIDAS
          </Typography>
          <Box
            bgcolor={"#111316"}
            borderRadius={"10px"}
            color={"white"}
            display={"flex"}
            justifyContent="center"
            padding={"4px 0"}
          >
            <Typography
              id="modal-modal-description"
              sx={{ flex: 1, fontSize: "15px", textAlign: "center" }}
            >
              DATA
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ flex: 1, fontSize: "15px", textAlign: "center" }}
            >
              JOGO
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ flex: 1, fontSize: "15px", textAlign: "center" }}
            >
              RESULTADO
            </Typography>
          </Box>
          <Box className={styles.matchContainer}>
            {fakeData.user.history.map((match) => {
              return (
                <Box className={styles.match}>
                  <Typography
                    id="modal-modal-description"
                    sx={{ flex: 1, textAlign: "center" }}
                  >
                    {match.date}
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ flex: 1, textAlign: "center" }}
                  >
                    {match.game}
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={
                      match.win
                        ? { color: "green", flex: 1, textAlign: "center" }
                        : { color: "red", flex: 1, textAlign: "center" }
                    }
                  >
                    {match.win ? "VITÓRIA" : "DERROTA"}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default HistoryModal;
