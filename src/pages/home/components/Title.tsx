import styles from "../styles/Title.module.scss";

interface IProps {
  Icon: any;
  title: string;
}

function Title({ Icon, title }: IProps) {
  return (
    <div className={styles.container}>
      <Icon sx={{ color: "#FF4C29" }} />
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Title;
