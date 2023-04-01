import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

import { v4 as uuidv4 } from "uuid";

import { Avatar, Box, Modal, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { changeMessagesModal } from "../../sidebarSlice";

import styles from "../../styles/MessagesModal.module.scss";

function MessagesModal() {
  const messagesState = useSelector(
    (state: RootState) => state.sidebar.messagesModal
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(changeMessagesModal(false));
  };

  return (
    <div>
      <Modal
        open={messagesState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.container}>
          <Box bgcolor={"#221B1B"} flex={1}>
            <Typography color={"#FFF"} textAlign={"center"} m={2}>
              AMIGOS
            </Typography>
            <Box className={styles.friendsContainer}>
              {/* {fakeData.user.friends.map((friend) => {
                return (
                  <Box
                    alignItems={"center"}
                    borderRadius={"5px"}
                    className={styles.friend}
                    color={"#6A6A84"}
                    display={"flex"}
                    gap={1}
                    key={uuidv4()}
                    p={"6px 4px"}
                  >
                    <Avatar alt={friend.userName} src={friend.image} />
                    <Typography>{friend.userName}</Typography>
                  </Box>
                );
              })} */}
            </Box>
          </Box>
          <Box className={styles.messageContainer}>
            <Box flex={1}></Box>
            <Box className={styles.inputContainer}>
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
