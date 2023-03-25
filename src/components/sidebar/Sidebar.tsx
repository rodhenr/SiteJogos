import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import Divider from "@mui/material/Divider";

import HistoryModal from "./HistoryModal";
import ProfileModal from "./ProfileModal";
import MessagesModal from "./MessagesModal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import SidebarUserOptions from "./SidebarUserOptions";
import UserInfo from "./UserInfo";
import Auth from "./Auth";

import styles from "./styles/Sidebar.module.scss";

function Sidebar() {
  const hasToken = useSelector((state: RootState) => state.auth.token);
  const historyState = useSelector(
    (state: RootState) => state.modals.historyModal
  );
  const profileState = useSelector(
    (state: RootState) => state.modals.profileModal
  );
  const messagesState = useSelector(
    (state: RootState) => state.modals.messagesModal
  );

  let render = (
    <div className={styles.container}>
      <Auth />
      <LoginModal />
      <RegisterModal />
    </div>
  );

  if (hasToken) {
    render = (
      <div className={styles.container}>
        <UserInfo />
        <Divider sx={{ backgroundColor: "#454550" }} />
        <SidebarUserOptions />
        {historyState && <HistoryModal />}
        {profileState && <ProfileModal />}
        {messagesState && <MessagesModal />}
      </div>
    );
  }

  return render;
}

export default Sidebar;
