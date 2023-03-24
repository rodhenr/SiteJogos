import { useGetPlayerRankingQuery } from "../../store/api/generalInfoApiSlice";
import { IRanking } from "../../store/slices/generalInfoSlice";

import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import BoltIcon from "@mui/icons-material/Bolt";

import Title from "./Title";
import RankingItem from "./RankingItem";

import styles from "./styles/Ranking.module.scss";

function Ranking() {
  const navigate = useNavigate();
  const { data, isSuccess, isLoading } = useGetPlayerRankingQuery(10);

  const handleNavigateRanking = () => {
    navigate("/ranking");
  };

  return (
    <div className={styles.container}>
      {isLoading && <div></div>}
      {isSuccess && (
        <>
          <div>
            <Title Icon={BoltIcon} title={"RANKING"} />
            <div className={styles.playersContainer}>
              {data.map((rank: IRanking) => (
                <RankingItem
                  key={uuidv4()}
                  level={rank.level}
                  player={rank.name}
                  playerID={rank.id}
                  position={rank.position}
                />
              ))}
            </div>
          </div>
          <div className={styles.buttonMore} onClick={handleNavigateRanking}>
            <p>VER RANKING GERAL</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Ranking;
