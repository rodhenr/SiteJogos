import { createSlice } from "@reduxjs/toolkit";

interface IJokenpoState {
  userChoice: string | null;
  cpuChoice: string | null;
  result: string | null;
}

const initialState: IJokenpoState = {
  userChoice: null,
  cpuChoice: null,
  result: null,
};

const gameSlice = createSlice({
  name: "jokenpo",
  initialState,
  reducers: {
    changeGameState: (state, action) => {
      const { userChoice, cpuChoice, result } = action.payload;
      state.userChoice = userChoice;
      state.cpuChoice = cpuChoice;
      state.result = result;
    },
    resetGameState: (state) => {
      state.userChoice = null;
      state.cpuChoice = null;
      state.result = null;
    },
  },
});

export const { changeGameState, resetGameState } = gameSlice.actions;

export default gameSlice.reducer;
