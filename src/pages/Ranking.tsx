import { useDispatch, useSelector } from "react-redux";
import { updatePlayerInfo } from "../store/slices/rankingSlice";
import { RootState } from "../store/store";

import { fakeData } from "../data/fakeData";

import Avatar from "@mui/material/Avatar";

import { v4 as uuidv4 } from "uuid";

import Layout from "../layouts/Layout";
import RankingItem from "../components/home/RankingItem";

import styles from "./styles/Ranking.module.scss";
import { useEffect } from "react";

function Ranking() {
  const dispatch = useDispatch();
  const playerInfo = useSelector((state: RootState) => state.ranking);

  useEffect(() => {
    const resetUser = () => {
      dispatch(
        updatePlayerInfo({
          playerID: null,
          playerName: null,
          playerAvatar: null,
          level: null,
          ranking: null,
          statistics: [],
        })
      );
    };

    resetUser();
  }, []);

  const searchPlayerInfo = () => {
    dispatch(
      updatePlayerInfo({
        playerID: "asdas-asdas-sadas-adasd",
        playerName: "Usuário Teste",
        playerAvatar:
          "https://i.pinimg.com/originals/ba/b5/fe/bab5fe8516e2eead05dcbcb0fe78c102.jpg",
        level: 25,
        ranking: 1,
        statistics: [
          { game: "Uno", wins: 22, loses: 12 },
          { game: "Uno", wins: 22, loses: 12 },
          { game: "Uno", wins: 22, loses: 12 },
          { game: "Uno", wins: 22, loses: 12 },
          { game: "Uno", wins: 22, loses: 12 },
        ],
      })
    );
  };

  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <div className={styles.mainRanking}>
            <p className={styles.rankingTitle}>RANKING GERAL</p>
            <div className={styles.ranking}>
              {fakeData.playerRanking.map((player) => {
                return (
                  <div key={uuidv4()} onClick={searchPlayerInfo}>
                    <RankingItem
                      level={player.level}
                      player={player.username}
                      playerID={player.userID}
                      position={player.position}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.playerInfoContainer}>
            {playerInfo.playerID ? (
              <div className={styles.playerInfo}>
                <div className={styles.info1}>
                  <p className={styles.ranking}>
                    RANKING #{playerInfo.ranking}
                  </p>
                  <p className={styles.id}>ID: {playerInfo.playerID}</p>
                </div>
                <div className={styles.info2}>
                  <Avatar
                    alt=""
                    src={playerInfo.playerAvatar ?? ""}
                    sx={{
                      border: "2px solid black",
                      height: "60px",
                      width: "60px",
                    }}
                  />
                  <div className={styles.nameLevelContainer}>
                    <p className={styles.name}>
                      {playerInfo.playerName?.toUpperCase() ?? ""}
                    </p>
                    <p className={styles.level}>NÍVEL {playerInfo.level}</p>
                  </div>
                </div>
                <div className={styles.statisticsContainer}>
                  <div className={styles.statisticsHeader}>
                    <p>JOGO</p>
                    <p>VITÓRIAS</p>
                    <p>DERROTAS</p>
                  </div>
                  <div className={styles.statisticsList}>
                    {playerInfo.statistics.map((statistic) => {
                      return (
                        <div className={styles.statistic} key={uuidv4()}>
                          <p>{statistic.game}</p>
                          <p>{statistic.wins}</p>
                          <p>{statistic.loses}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <p className={styles.noPlayerSelected}>
                Selecione um jogador para ver as suas estatísticas
              </p>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Ranking;
