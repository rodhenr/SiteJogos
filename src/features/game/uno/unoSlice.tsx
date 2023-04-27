import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUno {
  color: string | null;
  cpu1CardsLength: number;
  cpu2CardsLength: number;
  cpu3CardsLength: number;
  isClockwise: boolean;
  lastCard: string | null;
  nextPlayer: string;
  remainingCardsLength: number;
  remainingPlayers: string[];
  userCards: string[];
}

interface IUnoState extends IUno {
  choosedCard: string;
  chooseColor: boolean;
}

const initialState: IUnoState = {
  color: null,
  choosedCard: "",
  chooseColor: false,
  cpu1CardsLength: 0,
  cpu2CardsLength: 0,
  cpu3CardsLength: 0,
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
    setData: (state, action: PayloadAction<IUno>) => {
      const {
        color,
        cpu1CardsLength,
        cpu2CardsLength,
        cpu3CardsLength,
        isClockwise,
        lastCard,
        nextPlayer,
        remainingCardsLength,
        remainingPlayers,
        userCards,
      } = action.payload;

      state.color = color;
      state.cpu1CardsLength = cpu1CardsLength;
      state.cpu2CardsLength = cpu2CardsLength;
      state.cpu3CardsLength = cpu3CardsLength;
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
    setChooseColor: (state, action: PayloadAction<boolean>) => {
      state.chooseColor = action.payload;
    },
    setChoosedCard: (state, action: PayloadAction<string>) => {
      state.choosedCard = action.payload;
    },
  },
});

export const { setChoosedCard, setChooseColor, setData, skipTurn } =
  unoSlice.actions;

export default unoSlice.reducer;
