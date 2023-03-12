import { fakeData } from "../data/fakeData";

import { v4 as uuidv4 } from "uuid";

import Layout from "../layouts/Layout";

import styles from "./styles/Records.module.scss";

function Records() {
  return (
    <div>
      <Layout>
        <div className={styles.recordContainer}>
          {fakeData.gamesRecords.map((record) => {
            return (
              <div className={styles.record} key={uuidv4()}>
                <p className={styles.title}>{record.record}</p>
                <div className={styles.infoContainer}>
                  {record.ranking.map((player) => {
                    return (
                      <div className={styles.info} key={uuidv4()}>
                        <p className={styles.player}>{player.playerName}</p>
                        <p className={styles.value}>{player.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
}

export default Records;
