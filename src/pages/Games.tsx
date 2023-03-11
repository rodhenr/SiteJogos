import Sidebar from "../components/sidebar/Sidebar";
import Menu from "../components/menu/Menu";

import { fakeData } from "../data/fakeData";

import { v4 as uuidv4 } from "uuid";

import styles from "./styles/Games.module.scss";

function Games() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContainer}>
        <Menu />
        <div className={styles.main}>
          {fakeData.gameList.map((game) => {
            return (
              <div className={styles.game} key={uuidv4()}>
                <div className={styles.imageContainer}>
                  <img alt={game.name} src={game.image} />
                </div>
                <p>{game.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Games;
