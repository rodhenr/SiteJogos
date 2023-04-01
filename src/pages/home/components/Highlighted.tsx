import { v4 as uuidv4 } from "uuid";

import StarIcon from "@mui/icons-material/Star";

import HighlightedItem from "./HighlightedItem";
import Title from "./Title";

import styles from "../styles/Highlighted.module.scss";

function Highlighted() {
  const fakeData: any[] = [];
  return (
    <div className={styles.container}>
      <Title Icon={StarIcon} title={"EM DESTAQUE"} />
      <div className={styles.cardsContainer}>
        {/*  {fakeData.highlightedGames.map((game) => {
          return (
            <HighlightedItem
              key={uuidv4()}
              image={game.image}
              name={game.name}
              url={game.url}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default Highlighted;