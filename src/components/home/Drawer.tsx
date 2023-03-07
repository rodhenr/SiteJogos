import MenuIcon from "@mui/icons-material/Menu";

import styles from "./styles/Drawer.module.scss";

function Drawer() {
  return (
    <div className={styles.container}>
      <MenuIcon sx={{ color: "#FFF", fontSize: "32px" }} />
    </div>
  );
}

export default Drawer;
