import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { Avatar, Box, Modal, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { fakeData } from "../../data/fakeData";

import { changeMessagesModal } from "../../store/slices/modalSlice";

import styles from "./styles/MessagesModal.module.scss";

const style = {
  backgroundColor: "#1b1e23",
  border: "2px solid #000",
  boxShadow: 24,
  boxSizing: "border-box",
  display: "flex",
  gap: "8px",
  left: "50%",
  height: "600px",
  overflowY: "auto",
  position: "absolute" as "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
};

function MessagesModal() {
  const historyState = useSelector(
    (state: RootState) => state.modals.messagesModal
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(changeMessagesModal(false));
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
          <Box bgcolor={"#221B1B"} flex={1}>
            <Typography color={"#FFF"} textAlign={"center"} m={2}>
              AMIGOS
            </Typography>
            <Box display={"flex"} flexDirection={"column"} gap={1} p={1}>
              {fakeData.user.friends.map((friend) => {
                return (
                  <Box
                    alignItems={"center"}
                    borderRadius={"5px"}
                    className={styles.friend}
                    color={"#6A6A84"}
                    display={"flex"}
                    gap={1}
                    p={"6px 4px"}
                  >
                    <Avatar alt={friend.userName} src={friend.image} />
                    <Typography>{friend.userName}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            bgcolor={"#6b6b6b"}
            display={"flex"}
            flex={3}
            flexDirection={"column"}
          >
            <Box flex={"1"}></Box>
            <Box bgcolor={"#FFF"} display={"flex"} width={"100%"}>
              <input className={styles.inputMessage} type="text" />
              <Box borderRadius={"50%"} display={"flex"}>
                <SendIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default MessagesModal;
