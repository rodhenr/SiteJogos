import styles from "../../styles/components/Sidebar.module.scss";
import Messages from "./Messages";
import SidebarUserOptions from "./SidebarUserOptions";
import UserInfo from "./UserInfo";

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
