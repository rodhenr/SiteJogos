import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useGetPlayerRecentMatchesQuery } from "../../store/api/userInfoApiSlice";

import { v4 as uuidv4 } from "uuid";

import { Box, Modal, Typography } from "@mui/material";

import { changeHistoryModal } from "../../store/slices/modalSlice";

import styles from "./styles/HistoryModal.module.scss";
import { formatDateWithTime } from "../../utils/formatDate";

function HistoryModal() {
  const historyState = useSelector(
    (state: RootState) => state.modals.historyModal
  );
  const dispatch = useDispatch();

  const { data, isSuccess, isLoading, isError } =
    useGetPlayerRecentMatchesQuery(30, {
      refetchOnMountOrArgChange: true,
    });

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
        <Box className={styles.container}>
          {isLoading && <div></div>}
          {isError && <div></div>}

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: "white", fontSize: "18px", textAlign: "center" }}
          >
            HISTÓRICO DE PARTIDAS
          </Typography>
          {isSuccess &&
            (data.length > 0 ? (
              <>
                <Box
                  bgcolor={"#111316"}
                  borderRadius={"10px"}
                  className={styles.matchesTitle}
                  color={"white"}
                  display={"flex"}
                  justifyContent="center"
                  padding={"4px 0"}
                >
                  <p>DATA</p>
                  <p>JOGO</p>
                  <p>RESULTADO</p>
                </Box>
                <Box className={styles.matchContainer}>
                  {data.map((match) => {
                    return (
                      <Box className={styles.match} key={uuidv4()}>
                        <Typography
                          id="modal-modal-description"
                          sx={{ flex: 1, textAlign: "center" }}
                        >
                          {formatDateWithTime(match.date)}
                        </Typography>
                        <Typography
                          id="modal-modal-description"
                          sx={{ flex: 1, textAlign: "center" }}
                        >
                          {match["Game.name"]}
                        </Typography>
                        <Typography
                          id="modal-modal-description"
                          sx={
                            match.is_win
                              ? { color: "green", flex: 1, textAlign: "center" }
                              : { color: "red", flex: 1, textAlign: "center" }
                          }
                        >
                          {match.is_win ? "VITÓRIA" : "DERROTA"}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </>
            ) : (
              <div className={styles.noRecentMatch}>
                <p>Nenhuma partida recente</p>
              </div>
            ))}
        </Box>
      </Modal>
    </div>
  );
}

export default HistoryModal;
