import { v4 as uuidv4 } from "uuid";

import styles from "../styles/Games.module.scss";
import MainLayout from "../../shared/layout/MainLayout";
import GamesPageItem from "../../features/game/components/GamesPageItem";

function Games() {
  const fakeData: any[] = [];
  return (
    <div className={styles.container}>
      <MainLayout>
        <div className={styles.gamesContainer}>
          {/* {fakeData.gameList.map((game) => {
            return (
              <GamesPageItem
                image={game.image}
                key={uuidv4()}
                name={game.name}
                url={game.url}
              />
            );
          })} */}
        </div>
      </MainLayout>
    </div>
  );
}

export default Games;
