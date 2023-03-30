import { useState } from "react";

import { useGetPlayerRankingQuery } from "../features/matches/generalInfoApiSlice";

import { v4 as uuidv4 } from "uuid";

import MainLayout from "../shared/MainLayout";

import RankingItem from "../features/ranking/components/RankingItem";
import RankingUserInfo from "../features/ranking/components/RankingUserInfo";

import styles from "./styles/Ranking.module.scss";

function Ranking() {
  const [userID, setUserID] = useState<number | null>(null);

  const { data, isSuccess, isLoading } = useGetPlayerRankingQuery(100);

  const searchPlayerInfo = (userID: number) => {
    setUserID(userID);
  };

  return (
    <div>
      <MainLayout>
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
      </MainLayout>
    </div>
  );
}

export default Ranking;
