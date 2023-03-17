import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import styles from "./styles/Drawer.module.scss";
import UserInfo from "../sidebar/UserInfo";
import SidebarUserOptions from "../sidebar/SidebarUserOptions";

function DrawerMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menuIcon} onClick={toggleDrawer}>
        <MenuIcon sx={{ color: "#FFF", fontSize: "32px" }} />
      </div>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List className={styles.containerSidebar} sx={{ height: "100%" }}>
          <UserInfo />
          <Divider sx={{ backgroundColor: "#454550" }} />
          <SidebarUserOptions />
        </List>
      </Drawer>
    </div>
  );
}

export default DrawerMenu;
