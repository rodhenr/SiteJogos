import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IYahtzee {
  currentDices: number[];
  isGameOver: boolean;
  gameResult: string | null;
  points: number | null;
  remainingMoves: number;
  ruleSum_all: number | null;
  ruleSum_one: number | null;
  ruleSum_two: number | null;
  ruleSum_three: number | null;
  ruleSum_four: number | null;
  ruleSum_five: number | null;
  ruleSum_six: number | null;
  ruleSame_three: number | null;
  ruleSame_four: number | null;
  ruleRow_four: number | null;
  ruleRow_five: number | null;
  rule_yahtzee: number | null;
}

export interface IYahtzeeSlice extends IYahtzee {
  matchID: number | null;
  dicesState: boolean[];
}

const initialState: IYahtzeeSlice = {
  currentDices: [],
  isGameOver: false,
  gameResult: null,
  matchID: null,
  points: null,
  remainingMoves: 0,
  ruleSum_all: null,
  ruleSum_one: null,
  ruleSum_two: null,
  ruleSum_three: null,
  ruleSum_four: null,
  ruleSum_five: null,
  ruleSum_six: null,
  ruleSame_three: null,
  ruleSame_four: null,
  rule_yahtzee: null,
  ruleRow_four: null,
  ruleRow_five: null,
  dicesState: [false, false, false, false, false],
};

const yahtzeeSlice = createSlice({
  name: "yahtzee",
  initialState,
  reducers: {
    setYahtzeeMatchID: (state, action: PayloadAction<number | null>) => {
      state.matchID = action.payload;
    },
    resetDicesState: (state) => {
      state.dicesState = [false, false, false, false, false];
    },
    changeDicesState: (state, action: PayloadAction<number>) => {
      const dicesState = state.dicesState;
      dicesState[action.payload] = !dicesState[action.payload];

      state.dicesState = dicesState;
    },
    setYahtzeeData: (state, action: PayloadAction<IYahtzee>) => {
      const {
        currentDices,
        isGameOver,
        gameResult,
        points,
        remainingMoves,
        ruleSum_all,
        ruleSum_one,
        ruleSum_two,
        ruleSum_three,
        ruleSum_four,
        ruleSum_five,
        ruleSum_six,
        ruleSame_three,
        ruleSame_four,
        rule_yahtzee,
        ruleRow_four,
        ruleRow_five,
      } = action.payload;

      state.currentDices = currentDices;
      state.isGameOver = isGameOver;
      state.gameResult = gameResult;
      state.points = points;
      state.remainingMoves = remainingMoves;
      state.ruleSum_all = ruleSum_all;
      state.ruleSum_one = ruleSum_one;
      state.ruleSum_two = ruleSum_two;
      state.ruleSum_three = ruleSum_three;
      state.ruleSum_four = ruleSum_four;
      state.ruleSum_five = ruleSum_five;
      state.ruleSum_six = ruleSum_six;
      state.ruleSame_three = ruleSame_three;
      state.ruleSame_four = ruleSame_four;
      state.rule_yahtzee = rule_yahtzee;
      state.ruleRow_four = ruleRow_four;
      state.ruleRow_five = ruleRow_five;
    },
  },
});

export const {
  changeDicesState,
  resetDicesState,
  setYahtzeeData,
  setYahtzeeMatchID,
} = yahtzeeSlice.actions;

export default yahtzeeSlice.reducer;
