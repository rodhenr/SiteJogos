import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { v4 as uuidv4 } from "uuid";

import { Avatar, Box, Modal, Popover, Typography } from "@mui/material";

import { fakeData } from "../../data/fakeData";

import { changeProfileModal } from "../../store/slices/modalSlice";

import ExpInfo from "./ExpInfo";

import styles from "./styles/ProfileModal.module.scss";
import { useState } from "react";

const style = {
  backgroundColor: "#1b1e23",
  border: "2px solid #000",
  boxShadow: 24,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  left: "50%",
  maxHeight: "700px",
  overflowY: "auto",
  p: 2,
  position: "absolute" as "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
};

function ProfileModal() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const profileState = useSelector(
    (state: RootState) => state.modals.profileModal
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(changeProfileModal(false));
  };

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Modal
        open={profileState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.container} sx={style}>
          <Box
            display={"flex"}
            fontFamily={"Roboto Condensed"}
            justifyContent={"space-between"}
          >
            <Box
              alignItems={"center"}
              color={"#6A6A84"}
              display={"flex"}
              sx={{ gap: 1 }}
            >
              <Avatar
                alt="User Avatar"
                src={fakeData.user.avatar}
                sx={{ height: 70, width: 70 }}
              />
              <Box>
                <Typography sx={{ color: "#FFF", fontSize: "24px" }}>
                  {fakeData.user.username.toUpperCase()}
                </Typography>
                <Typography sx={{ color: "#FFF", fontSize: "16px" }}>
                  ID: {fakeData.user.userID}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                color={"#ff4c29"}
                sx={{ fontSize: "22px", fontWeight: 600 }}
              >
                RANKING #{fakeData.user.ranking}
              </Typography>
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
            minHeight={100}
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
            <Box display={"flex"} gap={1}>
              {fakeData.user.friends.map((friend) => {
                return (
                  <Avatar
                    alt={friend.userName}
                    className={styles.friendAvatar}
                    key={uuidv4()}
                    src={friend.image}
                  />
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
                display={"flex"}
                justifyContent={"center"}
                paddingY={"4px"}
                textAlign={"center"}
              >
                <Typography flex={1} fontSize={"17px"}>
                  JOGO
                </Typography>
                <Typography flex={1} fontSize={"17px"}>
                  VITÓRIAS
                </Typography>
                <Typography flex={1} fontSize={"17px"}>
                  DERROTAS
                </Typography>
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
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default ProfileModal;
