import styles from "../../styles/components/SidebarUserOptionsItem.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface IProps {
  title: string;
  iconName: string;
}

function SidebarOptionItem({ title, iconName }: IProps) {
  return (
    <div className={styles.container}>
      <AccountCircleIcon
        sx={{
          alignSelf: "center",
          color: "#FFF",
          fontSize: 17,
        }}
      />
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default SidebarOptionItem;
