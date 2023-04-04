import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";

import Title from "./Title";

import styles from "../styles/Highlighted.module.scss";

function Highlighted() {
  return (
    <Box className={styles.container}>
      <Title Icon={StarIcon} title={"EM DESTAQUE"} />
      <Box className={styles.cardsContainer}>
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
      </Box>
    </Box>
  );
}

export default Highlighted;
