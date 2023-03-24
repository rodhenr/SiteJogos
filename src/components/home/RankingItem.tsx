import styles from "./styles/RankingItem.module.scss";

interface IProps {
  level: number;
  player: string;
  playerID: number;
  position: number;
}

function RankingItem({ level, player, playerID, position }: IProps) {
  const bColor =
    position === 1
      ? "#E5D432"
      : position === 2
      ? "#9B9B9B"
      : position === 3
      ? "#E58832"
      : "#232323";

  const color = position < 4 ? "#000" : "#6a6a84";

  const handleClick = () => {};

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: bColor, color: color }}
    >
      <div className={styles.playerInfo}>
        <p>{position}.</p>
        <p className={styles.playerName}>{player.substring(0, 40)}</p>
      </div>
      <p>NÍVEL {level}</p>
    </div>
  );
}

export default RankingItem;
