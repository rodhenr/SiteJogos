import { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, Divider, List } from "@mui/material";

import Auth from "../../auth";
import UserInfo from "./UserInfo";
import SidebarUserOptions from "./SidebarUserOptions";

import styles from "../styles/Drawer.module.scss";

function DrawerMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const token = useSelector((state: RootState) => state.auth.token);

  let render = (
    <List className={styles.containerSidebar} sx={{ height: "100%" }}>
      <Auth />
    </List>
  );

  if (token) {
    render = (
      <List className={styles.containerSidebar} sx={{ height: "100%" }}>
        <UserInfo />
        <Divider sx={{ backgroundColor: "#454550" }} />
        <SidebarUserOptions />
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
