import { useNavigate } from "react-router-dom";

import { fakeData } from "../../data/fakeData";

import { v4 as uuidv4 } from "uuid";

import BoltIcon from "@mui/icons-material/Bolt";

import Title from "./Title";
import RankingItem from "./RankingItem";

import styles from "./styles/Ranking.module.scss";

function Ranking() {
  const navigate = useNavigate();

  const handleNavigateRanking = () => {
    navigate("/ranking");
  };

  return (
    <div className={styles.container}>
      <div>
        <Title Icon={BoltIcon} title={"RANKING"} />
        <div className={styles.playersContainer}>
          {fakeData.playerRanking.slice(0, 10).map((rank) => (
            <RankingItem
              key={uuidv4()}
              level={rank.level}
              player={rank.username}
              position={rank.position}
            />
          ))}
        </div>
      </div>
      <div className={styles.buttonMore} onClick={handleNavigateRanking}>
        <p>VER RANKING GERAL</p>
      </div>
    </div>
  );
}

export default Ranking;
