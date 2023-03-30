import { useGetPlayerRankingQuery } from "../matches/generalInfoApiSlice";
import { IRanking } from "../matches/generalInfoSlice";

import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import BoltIcon from "@mui/icons-material/Bolt";

import Title from "../../pages/home/components/Title";
import RankingItem from "./components/RankingItem";

import styles from "./styles/Ranking.module.scss";

function Index() {
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

export default Index;
