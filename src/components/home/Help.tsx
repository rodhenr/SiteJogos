import Title from "./Title";

import ContactSupportIcon from "@mui/icons-material/ContactSupport";

import styles from "./styles/Help.module.scss";

function Help() {
  return (
    <div className={styles.container}>
      <Title Icon={ContactSupportIcon} title={"AJUDA"} />
    </div>
  );
}

export default Help;
