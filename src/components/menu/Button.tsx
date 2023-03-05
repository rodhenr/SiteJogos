import styles from "../../styles/components/Button.module.scss";
import HomeIcon from "@mui/icons-material/Home";

interface IProps {
  title: string;
}

function Button({ title }: IProps) {
  return (
    <div className={styles.container}>
      <HomeIcon sx={{ color: "#6A6A84" }} />
      <p>{title}</p>
    </div>
  );
}

export default Button;
