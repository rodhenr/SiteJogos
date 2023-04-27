import { useDispatch, useSelector } from "react-redux";
import { setChooseColor, setChoosedCard, setData } from "../unoSlice";
import { RootState } from "../../../../app/store";
import { useUnoPlayerMoveMutation } from "../../gameApiSlice";

import { Box, Typography } from "@mui/material";

import { v4 as uuidv4 } from "uuid";

import styles from "../styles/Cards.module.scss";

interface IProps {
  cardsData: string[];
  player: string;
  position: string;
}

function Cards({ cardsData, player, position }: IProps) {
  const dispatch = useDispatch();
  const [userMove] = useUnoPlayerMoveMutation();
  const matchID = useSelector((state: RootState) => state.game.matchID);
  const nextPlayer = useSelector((state: RootState) => state.uno.nextPlayer);

  const getClassName = (cards: number) => {
    if (cards === 0) {
      return `${styles.cards}`;
    } else if (cards > 0 && cards <= 3) {
      return `${styles.cards} ${styles.maxThree}`;
    } else if (cards > 3 && cards <= 6) {
      return `${styles.cards} ${styles.maxSix}`;
    } else if (cards > 6 && cards <= 10) {
      return `${styles.cards} ${styles.maxTen}`;
    } else if (cards > 10) {
      return `${styles.cards} ${styles.max}`;
    }
  };

  const handlePlayerMove = async (card: string) => {
    if (nextPlayer !== "user") return;

    if (card.startsWith("plusFour") || card.startsWith("choose")) {
      dispatch(setChoosedCard(card));
      dispatch(setChooseColor(true));
    } else {
      try {
        const data = await userMove({
          matchID: matchID ?? 0,
          card,
          color: null,
        }).unwrap();

        dispatch(
          setData({
            color: data.color,
            cpu1CardsLength: data.cpu1CardsLength,
            cpu2CardsLength: data.cpu2CardsLength,
            cpu3CardsLength: data.cpu3CardsLength,
            isClockwise: data.isClockwise,
            lastCard: data.lastCard,
            nextPlayer: data.nextPlayer,
            remainingCardsLength: data.remainingCardsLength,
            remainingPlayers: data.remainingPlayers,
            userCards: data.userCards,
          })
        );
      } catch (err: any) {
        console.log(err);
      }
    }
  };

  const getCardsStructure = (cardsArray: string[], position: string) => {
    const result =
      cardsArray.length > 0 && position === "bottom" ? (
        cardsArray.map((i) => {
          return (
            <Box
              className={getClassName(cardsArray.length)}
              key={uuidv4()}
              onClick={() => {
                handlePlayerMove(i);
              }}
            >
              <img src={`/images/${i}.png`} alt={i} />
            </Box>
          );
        })
      ) : cardsArray.length > 0 ? (
        cardsArray.map((i) => {
          return (
            <Box className={getClassName(cardsArray.length)} key={uuidv4()}>
              <img src={"/images/back.png"} alt={i} />
            </Box>
          );
        })
      ) : (
        <Box className={styles.cards}></Box>
      );

    return result;
  };

  return (
    <Box
      className={
        position === "top"
          ? styles.playerThree
          : position === "bottom"
          ? styles.playerOne
          : position === "left"
          ? styles.playerTwo
          : styles.playerFour
      }
    >
      {(position === "right" || position === "bottom") && (
        <Typography>{player}</Typography>
      )}
      <Box
        className={
          position === "top"
            ? styles.container_top
            : position === "bottom"
            ? styles.container_player
            : position === "left"
            ? styles.container_left
            : styles.container_right
        }
      >
        {getCardsStructure(cardsData, position)}
      </Box>
      {(position === "left" || position === "top") && (
        <Typography>{player}</Typography>
      )}
    </Box>
  );
}

export default Cards;
//className={result.class2}
//className={result.class}
