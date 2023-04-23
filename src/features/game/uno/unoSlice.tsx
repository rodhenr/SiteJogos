import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUno {
  color: string | null;
  isClockwise: boolean;
  lastCard: string | null;
  nextPlayer: string;
  remainingCardsLength: number;
  remainingPlayers: string[];
  userCards: number[];
}

const initialState: IUno = {
  color: null,
  isClockwise: true,
  lastCard: null,
  nextPlayer: "",
  remainingCardsLength: 60,
  remainingPlayers: [],
  userCards: [],
};

const unoSlice = createSlice({
  name: "uno",
  initialState,
  reducers: {
    playerMove: (state, action: PayloadAction<IUno>) => {
      const {
        color,
        isClockwise,
        lastCard,
        nextPlayer,
        remainingCardsLength,
        remainingPlayers,
        userCards,
      } = action.payload;

      state.color = color;
      state.isClockwise = isClockwise;
      state.lastCard = lastCard;
      state.nextPlayer = nextPlayer;
      state.remainingCardsLength = remainingCardsLength;
      state.remainingPlayers = remainingPlayers;
      state.userCards = userCards;
    },
    cpuMove: (state, action: PayloadAction<IUno>) => {
      const {
        color,
        isClockwise,
        lastCard,
        nextPlayer,
        remainingCardsLength,
        remainingPlayers,
        userCards,
      } = action.payload;

      state.color = color;
      state.isClockwise = isClockwise;
      state.lastCard = lastCard;
      state.nextPlayer = nextPlayer;
      state.remainingCardsLength = remainingCardsLength;
      state.remainingPlayers = remainingPlayers;
      state.userCards = userCards;
    },
    buyCard: (state, action: PayloadAction<IUno>) => {
      const {
        color,
        isClockwise,
        lastCard,
        nextPlayer,
        remainingCardsLength,
        remainingPlayers,
        userCards,
      } = action.payload;

      state.color = color;
      state.isClockwise = isClockwise;
      state.lastCard = lastCard;
      state.nextPlayer = nextPlayer;
      state.remainingCardsLength = remainingCardsLength;
      state.remainingPlayers = remainingPlayers;
      state.userCards = userCards;
    },
    skipTurn: (state, action: PayloadAction<{ nextPlayer: string }>) => {
      const { nextPlayer } = action.payload;

      state.nextPlayer = nextPlayer;
    },
  },
});

export const { buyCard, cpuMove, playerMove, skipTurn } = unoSlice.actions;

export default unoSlice.reducer;
