import SidebarUserOptionItem from "./SidebarUserOptionItem";

import styles from "./styles/SidebarUserOptions.module.scss";

function SidebarUserOptions() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>MENU</p>
      <div className={styles.optionsContainer}>
        <SidebarUserOptionItem title={"Meu Perfil"} iconName={""} />
        <SidebarUserOptionItem title={"Meus Recordes"} iconName={""} />
        <SidebarUserOptionItem title={"Histórico"} iconName={""} />
      </div>
    </div>
  );
}

export default SidebarUserOptions;
