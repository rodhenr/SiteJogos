import { useGetRecentMatchesQuery } from "../../store/api/generalInfoApiSlice";
import { IRecentMatches } from "../../store/slices/generalInfoSlice";

import { v4 as uuidv4 } from "uuid";

import TvIcon from "@mui/icons-material/Tv";

import Title from "./Title";
import RecentItem from "./RecentItem";

import styles from "./styles/Recent.module.scss";

function Recent() {
  const { data, isSuccess, isLoading } = useGetRecentMatchesQuery(5);

  return (
    <div className={styles.container}>
      {isLoading && <div></div>}
      {isSuccess && (
        <>
          <Title Icon={TvIcon} title={"PARTIDAS RECENTES"} />
          <div className={styles.tableContainer}>
            <div className={styles.header}>
              <p>DATA/HORA</p>
              <p>JOGO</p>
              <p>USUÁRIO</p>
              <p>RESULTADO</p>
            </div>
            <div className={styles.items}>
              {data.map((match: IRecentMatches) => {
                return (
                  <RecentItem
                    game={match["Game.name"]}
                    key={uuidv4()}
                    time={match.date}
                    user={match["User.name"]}
                    win={match.is_win}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Recent;
