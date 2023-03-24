import { useState } from "react";

import { useGetPlayerRankingQuery } from "../store/api/generalInfoApiSlice";

import { v4 as uuidv4 } from "uuid";

import Layout from "../layouts/Layout";

import RankingItem from "../components/home/RankingItem";
import RankingUserInfo from "../components/ranking/RankingUserInfo";

import styles from "./styles/Ranking.module.scss";

function Ranking() {
  const [userID, setUserID] = useState<number | null>(null);

  const { data, isSuccess, isLoading } = useGetPlayerRankingQuery(100);

  const searchPlayerInfo = (userID: number) => {
    setUserID(userID);
  };

  return (
    <div>
      <Layout>
        <div className={styles.container}>
          {isLoading && <div></div>}
          <div className={styles.mainRanking}>
            <p className={styles.rankingTitle}>RANKING GERAL</p>
            {isSuccess && (
              <>
                <div className={styles.ranking}>
                  {data.map((player) => {
                    return (
                      <div
                        key={uuidv4()}
                        onClick={() => searchPlayerInfo(player.id)}
                      >
                        <RankingItem
                          level={player.level}
                          player={player.name}
                          playerID={player.id}
                          position={player.position}
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          <div className={styles.playerInfoContainer}>
            {!userID ? (
              <p className={styles.noPlayerSelected}>
                Selecione um jogador para ver as suas estatísticas
              </p>
            ) : (
              <RankingUserInfo userID={userID} />
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Ranking;
