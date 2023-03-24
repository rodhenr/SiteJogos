import { useGetPlayerInfoFromRankingQuery } from "../../store/api/generalInfoApiSlice";

import { Avatar } from "@mui/material";

import { v4 as uuidv4 } from "uuid";

import styles from "./styles/RankingUserInfo.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface IProps {
  userID: number;
}

function RankingUserInfo({ userID }: IProps) {
  const { data, isSuccess, isLoading } =
    useGetPlayerInfoFromRankingQuery(userID);

  return (
    <>
      {isLoading && <div></div>}
      {isSuccess && (
        <div className={styles.playerInfo}>
          <div className={styles.info1}>
            <p className={styles.ranking}>RANKING #{data.ranking}</p>
            <p className={styles.id}>ID: {data.id}</p>
          </div>
          <div className={styles.info2}>
            <Avatar
              alt=""
              src={data.avatar}
              sx={{
                border: "2px solid black",
                height: "60px",
                width: "60px",
              }}
            />
            <div className={styles.nameLevelContainer}>
              <p className={styles.name}>{data.name.toUpperCase()}</p>
              <p className={styles.level}>NÍVEL {data.level}</p>
            </div>
          </div>
          <div className={styles.statisticsContainer}>
            <div className={styles.statisticsHeader}>
              <p>JOGO</p>
              <p>VITÓRIAS</p>
              <p>DERROTAS</p>
            </div>
            <div className={styles.statisticsList}>
              {data.statistics.map((statistic) => {
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
      )}
    </>
  );
}

export default RankingUserInfo;
