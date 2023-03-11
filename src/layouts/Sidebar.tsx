import Messages from "../components/sidebar/Messages";
import SidebarUserOptions from "../components/sidebar/SidebarUserOptions";
import UserInfo from "../components/sidebar/UserInfo";

import Divider from "@mui/material/Divider";

import styles from "./styles/Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.container}>
      <UserInfo />
      <SidebarUserOptions />
      <Divider sx={{ backgroundColor: "#454550" }} />
      <Messages />
    </div>
  );
}

export default Sidebar;
