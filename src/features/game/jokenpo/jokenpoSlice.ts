import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IJokenpoState {
  cpuChoice: string | null;
  gameResult: string | null;
  isGameOver: boolean;
  matchID: number | null;
  result: string | null;
  userChoice: string | null;
}

const initialState: IJokenpoState = {
  cpuChoice: null,
  gameResult: null,
  isGameOver: false,
  matchID: null,
  result: null,
  userChoice: null,
};

const gameSlice = createSlice({
  name: "jokenpo",
  initialState,
  reducers: {
    setJokenpoMatchID: (state, action: PayloadAction<number>) => {
      state.cpuChoice = null;
      state.gameResult = null;
      state.isGameOver = false;
      state.matchID = action.payload;
      state.result = null;
      state.userChoice = null;
    },
    changeGameState: (
      state,
      action: PayloadAction<{
        cpuChoice: string | null;
        result: string | null;
        userChoice: string | null;
      }>
    ) => {
      const { userChoice, cpuChoice, result } = action.payload;

      state.userChoice = userChoice;
      state.cpuChoice = cpuChoice;
      state.result = result;
    },
    resetJokenpo: (state) => {
      state.cpuChoice = null;
      state.gameResult = null;
      state.isGameOver = false;
      state.matchID = null;
      state.result = null;
      state.userChoice = null;
    },
  },
});

export const { changeGameState, resetJokenpo, setJokenpoMatchID } =
  gameSlice.actions;

export default gameSlice.reducer;
