import Title from "./Title";
import RankingItem from "./RankingItem";

import styles from "./styles/Ranking.module.scss";

function Ranking() {
  const fakeData = [
    { player: "Rodrigo Henrique", position: 1, level: 29 },
    { player: "Rodrigo Henrique", position: 2, level: 28 },
    { player: "Rodrigo Henrique", position: 3, level: 27 },
    { player: "Rodrigo Henrique", position: 4, level: 26 },
    { player: "Rodrigo Henrique", position: 5, level: 25 },
    { player: "Rodrigo Henrique", position: 6, level: 24 },
    { player: "Rodrigo Henrique", position: 7, level: 23 },
    { player: "Rodrigo Henrique", position: 8, level: 22 },
    { player: "Rodrigo Henrique", position: 9, level: 21 },
    { player: "Rodrigo Henrique", position: 10, level: 20 },
  ];

  return (
    <div className={styles.container}>
      <Title title={"RANKING"} />
      <div className={styles.playersContainer}>
        {fakeData.map((item) => (
          <RankingItem
            position={item.position}
            player={item.player}
            level={item.level}
          />
        ))}
      </div>
      <div className={styles.buttonMore}>
        <p>VER RANKING GERAL</p>
      </div>
    </div>
  );
}

export default Ranking;
