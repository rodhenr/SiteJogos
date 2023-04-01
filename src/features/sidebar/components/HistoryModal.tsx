import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useGetPlayerRecentMatchesQuery } from "../userInfoApiSlice";
import { changeHistoryModal } from "../modalSlice";

import { v4 as uuidv4 } from "uuid";

import { Box, CircularProgress, Modal, Typography } from "@mui/material";

import CloseButton from "../../../shared/components/CloseButton";

import { formatDateWithTime } from "../../../utils/formatDate";

import styles from "../styles/HistoryModal.module.scss";

function HistoryModal() {
  const historyState = useSelector(
    (state: RootState) => state.modals.historyModal
  );
  const dispatch = useDispatch();

  const { data, isSuccess, isLoading, isError } =
    useGetPlayerRecentMatchesQuery(0, {
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
          <CloseButton handleClose={handleClose} />
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h1"
            sx={{ color: "white", textAlign: "center" }}
          >
            HISTÓRICO DE PARTIDAS
          </Typography>

          {isLoading && (
            <Box
              alignItems={"center"}
              display={"flex"}
              justifyContent={"center"}
              height={"100%"}
              width={"100%"}
            >
              <CircularProgress />
            </Box>
          )}

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
          {isError && (
            <div className={styles.errorMessage}>
              <p>Ocorreu um erro no servidor...</p>{" "}
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default HistoryModal;
