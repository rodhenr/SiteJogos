import styles from "./styles/RankingItem.module.scss";

interface IProps {
  position: number;
  player: string;
  level: number;
}

function RankingItem({ position, player, level }: IProps) {
  const bColor =
    position === 1
      ? "#E5D432"
      : position === 2
      ? "#9B9B9B"
      : position === 3
      ? "#E58832"
      : "#232323";

  return (
    <div className={styles.container} style={{ backgroundColor: bColor }}>
      <div className={styles.playerInfo}>
        <p>{position}.</p>
        <p>{player}</p>
      </div>
      <p>NÍVEL {level}</p>
    </div>
  );
}

export default RankingItem;
