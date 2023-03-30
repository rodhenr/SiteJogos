import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import Divider from "@mui/material/Divider";

import HistoryModal from "./components/HistoryModal";
import ProfileModal from "./components/ProfileModal";
import MessagesModal from "./components/MessagesModal";
import LoginModal from "../auth/components/LoginModal";
import RegisterModal from "../auth/components/RegisterModal";
import SidebarUserOptions from "./components/SidebarUserOptions";
import UserInfo from "./components/UserInfo";
import Auth from "../auth";

import styles from "./styles/Sidebar.module.scss";

function Index() {
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

export default Index;
