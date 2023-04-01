import { useSelector } from "react-redux";
import {
  selectHistoryState,
  selectMessagesState,
  selectProfileState,
} from "../sidebarSlice";

import { Divider, List } from "@mui/material";

import UserInfo from "./UserInfo";
import SidebarUserOptions from "./SidebarUserOptions";
import HistoryModal from "./matches/MatchesModal";
import ProfileModal from "./profile/ProfileModal";
import MessagesModal from "./messages/MessagesModal";

function LoggedMenuMobile() {
  const historyState = useSelector(selectHistoryState);
  const profileState = useSelector(selectProfileState);
  const messagesState = useSelector(selectMessagesState);

  return (
    <List sx={{ width: "100%" }}>
      <UserInfo />
      <Divider sx={{ backgroundColor: "#454550" }} />
      <SidebarUserOptions />
      {historyState && <HistoryModal />}
      {profileState && <ProfileModal />}
      {messagesState && <MessagesModal />}
    </List>
  );
}

export default LoggedMenuMobile;