import { fakeData } from "../data/fakeData";

import { v4 as uuidv4 } from "uuid";

import styles from "./styles/Games.module.scss";
import Layout from "../layouts/Layout";
import GamesPageItem from "../components/games/GamesPageItem";

function Games() {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.gamesContainer}>
          {fakeData.gameList.map((game) => {
            return (
              <GamesPageItem
                image={game.image}
                key={uuidv4()}
                name={game.name}
              />
            );
          })}
        </div>
      </Layout>
    </div>
  );
}

export default Games;
