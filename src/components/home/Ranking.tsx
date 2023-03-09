import { fakeData } from "../../data/fakeData";

import { v4 as uuidv4 } from "uuid";

import Title from "./Title";
import RankingItem from "./RankingItem";

import styles from "./styles/Ranking.module.scss";

function Ranking() {
  return (
    <div className={styles.container}>
      <div>
        <Title title={"RANKING"} />
        <div className={styles.playersContainer}>
          {fakeData.playerRanking.map((rank) => (
            <RankingItem
              key={uuidv4()}
              level={rank.level}
              player={rank.username}
              position={rank.position}
            />
          ))}
        </div>
      </div>
      <div className={styles.buttonMore}>
        <p>VER RANKING GERAL</p>
      </div>
    </div>
  );
}

export default Ranking;
