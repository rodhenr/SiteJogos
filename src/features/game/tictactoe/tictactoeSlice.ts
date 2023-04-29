import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CellType } from "../gameApiSlice";

interface ITicTacToe {
  cells: CellType[];
  gameResult: string | null;
  isGameOver: boolean | null;
  isPlayerNext: boolean | null;
}

interface ITicTacToeSlice extends ITicTacToe {
  matchID: number | null;
}

const initialState: ITicTacToeSlice = {
  cells: [],
  gameResult: null,
  isGameOver: false,
  isPlayerNext: null,
  matchID: null,
};

const gameSlice = createSlice({
  name: "tictactoe",
  initialState,
  reducers: {
    setTicTacToeMatchID: (state, action: PayloadAction<number>) => {
      state.cells = new Array(9).fill(null);
      state.gameResult = null;
      state.isGameOver = false;
      state.isPlayerNext = true;
      state.matchID = action.payload;
    },
    changeGameState: (state, action: PayloadAction<ITicTacToe>) => {
      const { cells, isGameOver, isPlayerNext, gameResult } = action.payload;

      state.cells = cells;
      state.gameResult = gameResult;
      state.isGameOver = isGameOver;
      state.isPlayerNext = isPlayerNext;
    },
  },
});

export const { setTicTacToeMatchID, changeGameState } = gameSlice.actions;

export default gameSlice.reducer;
