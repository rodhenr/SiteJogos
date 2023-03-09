import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import SidebarUserOptionItem from "./SidebarUserOptionItem";

import styles from "./styles/SidebarUserOptions.module.scss";

function SidebarUserOptions() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>MENU</p>
      <div className={styles.optionsContainer}>
        <SidebarUserOptionItem Icon={AccountCircleIcon} title={"Meu Perfil"} />
        <SidebarUserOptionItem Icon={EmojiEventsIcon} title={"Meus Recordes"} />
        <SidebarUserOptionItem Icon={HistoryIcon} title={"Histórico"} />
      </div>
    </div>
  );
}

export default SidebarUserOptions;
