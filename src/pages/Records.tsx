import { v4 as uuidv4 } from "uuid";

import Layout from "../layouts/Layout";
import { useGetRecordsQuery } from "../store/api/generalInfoApiSlice";

import styles from "./styles/Records.module.scss";

function Records() {
  const { data, isSuccess, isLoading } = useGetRecordsQuery();

  return (
    <div>
      <Layout>
        <div className={styles.recordContainer}>
          {isLoading && <div></div>}
          {isSuccess && (
            <>
              {Object.keys(data).map((game) => {
                const gameRecords = data[game];
                const gameName = gameRecords[0].gameName;

                return (
                  <div className={styles.record} key={uuidv4()}>
                    <p className={styles.title}>Vitórias - {gameName}</p>
                    <div className={styles.infoContainer}>
                      {gameRecords.map((player) => {
                        return (
                          <div className={styles.info} key={uuidv4()}>
                            <p className={styles.player}>{player.userName}</p>
                            <p className={styles.value}>{player.totalWins}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </Layout>
    </div>
  );
}

export default Records;
