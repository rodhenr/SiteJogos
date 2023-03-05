import Messages from "./Messages";
import SidebarUserOptions from "./SidebarUserOptions";
import UserInfo from "./UserInfo";

import styles from "./styles/Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.container}>
      <UserInfo />
      <SidebarUserOptions />
      <Messages />
    </div>
  );
}

export default Sidebar;
