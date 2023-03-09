import { fakeData } from "../../data/fakeData";

import { v4 as uuidv4 } from "uuid";

import Title from "./Title";
import RecentItem from "./RecentItem";

import styles from "./styles/Recent.module.scss";

function Recent() {
  return (
    <div className={styles.container}>
      <Title title={"PARTIDAS RECENTES"} />
      <div className={styles.tableContainer}>
        <div className={styles.header}>
          <p>DATA/HORA</p>
          <p>JOGO</p>
          <p>USUÁRIO</p>
          <p>RESULTADO</p>
        </div>
        <div className={styles.items}>
          {fakeData.recentMatches.map((match) => {
            return (
              <RecentItem
                game={match.game}
                key={uuidv4()}
                time={match.time}
                user={match.nameLastUser}
                win={match.win}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Recent;
