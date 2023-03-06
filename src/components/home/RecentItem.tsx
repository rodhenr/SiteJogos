import styles from "./styles/RecentItem.module.scss";

interface IProps {
  time: string;
  game: string;
  user: string;
  result: string;
}

function RecentItem({ time, game, user, result }: IProps) {
  return (
    <div className={styles.container}>
      <p>{time}</p>
      <p>{game}</p>
      <p>{user}</p>
      <p
        style={
          result === "DERROTA" ? { color: "#FE3434" } : { color: "#11C318" }
        }
      >
        {result}
      </p>
    </div>
  );
}

export default RecentItem;
