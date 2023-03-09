import styles from "./styles/Button.module.scss";

interface IProps {
  Icon: any;
  title: string;
}

function Button({ Icon, title }: IProps) {
  return (
    <div className={styles.container}>
      <Icon sx={{ color: "#6A6A84" }} />
      <p>{title.toUpperCase()}</p>
    </div>
  );
}

export default Button;
