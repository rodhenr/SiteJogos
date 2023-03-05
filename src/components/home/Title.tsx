import styles from "./styles/Title.module.scss";
import StarIcon from "@mui/icons-material/Star";

interface IProps {
  title: string;
}

function Title({ title }: IProps) {
  return (
    <div className={styles.container}>
      <StarIcon sx={{ color: "#FF4C29" }} />
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Title;
