import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUno {
  color: string | null;
  cpu1CardsLength: number;
  cpu2CardsLength: number;
  cpu3CardsLength: number;
  isClockwise: boolean;
  isGameOver: boolean;
  gameResult: string | null;
  lastCard: string | null;
  nextPlayer: string;
  remainingCardsLength: number;
  remainingPlayers: string[];
  turn: number | null;
  userCards: string[];
}

export interface IUnoSlice extends IUno {
  choosedCard: string;
  chooseColor: boolean;
  matchID: number | null;
}

const initialState: IUnoSlice = {
  color: null,
  choosedCard: "",
  chooseColor: false,
  cpu1CardsLength: 0,
  cpu2CardsLength: 0,
  cpu3CardsLength: 0,
  isClockwise: true,
  isGameOver: false,
  gameResult: null,
  lastCard: null,
  matchID: null,
  nextPlayer: "",
  remainingCardsLength: 60,
  remainingPlayers: [],
  turn: null,
  userCards: [],
};

const unoSlice = createSlice({
  name: "uno",
  initialState,
  reducers: {
    setUnoMatchID: (state, action: PayloadAction<number | null>) => {
      state.matchID = action.payload;
    },
    setData: (state, action: PayloadAction<IUno>) => {
      const {
        color,
        cpu1CardsLength,
        cpu2CardsLength,
        cpu3CardsLength,
        isClockwise,
        isGameOver,
        gameResult,
        lastCard,
        nextPlayer,
        remainingCardsLength,
        remainingPlayers,
        userCards,
        turn,
      } = action.payload;

      state.color = color;
      state.cpu1CardsLength = cpu1CardsLength;
      state.cpu2CardsLength = cpu2CardsLength;
      state.cpu3CardsLength = cpu3CardsLength;
      state.isClockwise = isClockwise;
      state.isGameOver = isGameOver;
      state.gameResult = gameResult;
      state.lastCard = lastCard;
      state.nextPlayer = nextPlayer;
      state.remainingCardsLength = remainingCardsLength;
      state.remainingPlayers = remainingPlayers;
      state.turn = turn;
      state.userCards = userCards;
    },
    skipTurn: (
      state,
      action: PayloadAction<{
        isGameOver: boolean;
        gameResult: string | null;
        nextPlayer: string;
        turn: number | null;
      }>
    ) => {
      const { nextPlayer, turn, isGameOver, gameResult } = action.payload;

      state.isGameOver = isGameOver;
      state.gameResult = gameResult;
      state.turn = turn;
      state.nextPlayer = nextPlayer;
    },
    setChooseColor: (state, action: PayloadAction<boolean>) => {
      state.chooseColor = action.payload;
    },
    setChoosedCard: (state, action: PayloadAction<string>) => {
      state.choosedCard = action.payload;
    },
    resetUno: (state) => {
      state.color = null;
      state.choosedCard = "";
      state.chooseColor = false;
      state.cpu1CardsLength = 0;
      state.cpu2CardsLength = 0;
      state.cpu3CardsLength = 0;
      state.isClockwise = true;
      state.isGameOver = false;
      state.gameResult = null;
      state.lastCard = null;
      state.matchID = null;
      state.nextPlayer = "";
      state.remainingCardsLength = 60;
      state.remainingPlayers = [];
      state.turn = null;
      state.userCards = [];
    },
  },
});

export const {
  resetUno,
  setChoosedCard,
  setChooseColor,
  setData,
  setUnoMatchID,
  skipTurn,
} = unoSlice.actions;

export default unoSlice.reducer;
