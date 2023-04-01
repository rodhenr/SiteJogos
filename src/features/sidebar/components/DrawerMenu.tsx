import { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, Divider, List } from "@mui/material";

import Auth from "../../auth";
import UserInfo from "./UserInfo";
import SidebarUserOptions from "./SidebarUserOptions";
import LoginModal from "../../auth/components/LoginModal";
import RegisterModal from "../../auth/components/RegisterModal";
import HistoryModal from "./HistoryModal";
import ProfileModal from "./ProfileModal";
import MessagesModal from "./MessagesModal";

import styles from "../styles/Drawer.module.scss";

function DrawerMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const historyState = useSelector(
    (state: RootState) => state.modals.historyModal
  );
  const profileState = useSelector(
    (state: RootState) => state.modals.profileModal
  );
  const messagesState = useSelector(
    (state: RootState) => state.modals.messagesModal
  );

  const token = useSelector((state: RootState) => state.auth.token);

  let render = (
    <List className={styles.containerSidebar} sx={{ height: "100%" }}>
      <Auth />
      <LoginModal />
      <RegisterModal />
    </List>
  );

  if (token) {
    render = (
      <List className={styles.containerSidebar} sx={{ height: "100%" }}>
        <UserInfo />
        <Divider sx={{ backgroundColor: "#454550" }} />
        <SidebarUserOptions />
        {historyState && <HistoryModal />}
        {profileState && <ProfileModal />}
        {messagesState && <MessagesModal />}
      </List>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.menuIcon} onClick={toggleDrawer}>
        <MenuIcon sx={{ color: "#FFF", fontSize: "32px" }} />
      </div>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        {render}
      </Drawer>
    </div>
  );
}

export default DrawerMenu;
