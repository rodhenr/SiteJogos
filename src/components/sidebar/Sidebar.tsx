import Messages from "./Messages";
import SidebarUserOptions from "./SidebarUserOptions";
import UserInfo from "./UserInfo";

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
