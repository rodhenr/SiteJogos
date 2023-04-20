import { createSlice } from "@reduxjs/toolkit";
import { CellType } from "./gameApiSlice";

interface IGameState {
  matchID: number | null;
  cells: CellType[];
  isGameOver: boolean | null;
  gameResult: string | null;
  isPlayerNext: boolean | null;
}

const initialState: IGameState = {
  matchID: null,
  cells: [],
  isGameOver: null,
  gameResult: null,
  isPlayerNext: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeMatchID: (state, action) => {
      state.matchID = action.payload;
      state.cells = new Array(9).fill(null);
      state.isGameOver = false;
      state.isPlayerNext = true;
    },
    changeGameState: (state, action) => {
      const { cells, isGameOver, isPlayerNext, gameResult } = action.payload;
      state.cells = cells;
      state.isGameOver = isGameOver;
      state.isPlayerNext = isPlayerNext;
      state.gameResult = gameResult;
    },
  },
});

export const { changeMatchID, changeGameState } = gameSlice.actions;

export default gameSlice.reducer;
