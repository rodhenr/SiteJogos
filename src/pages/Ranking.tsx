import { fakeData } from "../data/fakeData";

import { v4 as uuidv4 } from "uuid";

import Layout from "../layouts/Layout";
import RankingItem from "../components/home/RankingItem";

import styles from "./styles/Ranking.module.scss";

function Ranking() {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <div className={styles.mainRanking}>
            <p className={styles.rankingTitle}>RANKING GERAL</p>
            <div className={styles.ranking}>
              {fakeData.playerRanking.map((player) => {
                return (
                  <RankingItem
                    key={uuidv4()}
                    level={player.level}
                    player={player.username}
                    position={player.position}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.playerInfo}>
            <p className={styles.noPlayerSelected}>
              Selecione um jogador para ver as suas estatísticas
            </p>
            {/* CRIAR FUNÇÃO QUE PERMITA VISUALIZAR INFORMAÇÕES DE UM USUÁRIO ESPECÍFICO */}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Ranking;
