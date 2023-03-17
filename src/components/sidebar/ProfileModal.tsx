import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { v4 as uuidv4 } from "uuid";

import { Avatar, Box, Modal, Tooltip, Typography } from "@mui/material";

import { fakeData } from "../../data/fakeData";

import { changeProfileModal } from "../../store/slices/modalSlice";

import ExpInfo from "./ExpInfo";

import styles from "./styles/ProfileModal.module.scss";

function ProfileModal() {
  const profileState = useSelector(
    (state: RootState) => state.modals.profileModal
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(changeProfileModal(false));
  };

  return (
    <div>
      <Modal
        open={profileState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.container} sx={{ boxShadow: 24 }}>
          <Box
            display={"flex"}
            fontFamily={"Roboto Condensed"}
            justifyContent={"space-between"}
          >
            <Box
              alignItems={"center"}
              color={"#6A6A84"}
              display={"flex"}
              flexDirection={"column"}
              sx={{ gap: 1 }}
            >
              <p className={styles.ranking}>RANKING #{fakeData.user.ranking}</p>
              <Box className={styles.userInfoContainer}>
                <Avatar
                  alt="User Avatar"
                  className={styles.avatar}
                  src={fakeData.user.avatar}
                />
                <Box className={styles.idNameContainer}>
                  <p className={styles.userName}>
                    {fakeData.user.username.toUpperCase()}
                  </p>
                  <p className={styles.userID}>ID: {fakeData.user.userID}</p>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.expbar} color={"#6A6A84"}>
            <ExpInfo
              exp={fakeData.user.expLevel}
              isModal={true}
              level={fakeData.user.level}
              maxExpLevel={fakeData.user.maxExpLevel}
            />
          </Box>
          <Box
            className={styles.friendsContainer}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Roboto Condensed",
                fontSize: "20px",
              }}
            >
              AMIGOS
            </Typography>
            <Box className={styles.friends} display={"flex"} gap={1}>
              {fakeData.user.friends.map((friend) => {
                return (
                  <Tooltip key={uuidv4()} title={friend.userName}>
                    <Avatar
                      alt={friend.userName}
                      className={styles.friendAvatar}
                      src={friend.image}
                    />
                  </Tooltip>
                );
              })}
            </Box>
          </Box>
          <Box
            className={styles.statisticsContainer}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
            minHeight={100}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Roboto Condensed",
                fontSize: "20px",
              }}
            >
              ESTATÍSTICAS
            </Typography>
            <Box color={"#FFF"}>
              <Box
                bgcolor={"#323131"}
                borderRadius={2}
                className={styles.statisticsTitle}
                display={"flex"}
                justifyContent={"center"}
                paddingY={"4px"}
                textAlign={"center"}
              >
                <p>JOGO</p>
                <p>VITÓRIAS</p>
                <p>DERROTAS</p>
              </Box>
              <Box
                className={styles.statisticsItems}
                color={"#6A6A84"}
                display={"flex"}
                flexDirection={"column"}
                gap={1}
                mt={1}
              >
                {fakeData.user.statistics.map((game) => {
                  return (
                    <Box
                      borderRadius={"6px"}
                      className={styles.statistic}
                      display={"flex"}
                      justifyContent={"space-between"}
                      key={uuidv4()}
                      padding={"2px 0"}
                      textAlign={"center"}
                    >
                      <Typography flex={1} fontSize={"13px"}>
                        {game.game}
                      </Typography>
                      <Typography flex={1} fontSize={"13px"}>
                        {game.wins}
                      </Typography>
                      <Typography flex={1} fontSize={"13px"}>
                        {game.loses}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box minHeight={"20px"}></Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default ProfileModal;
