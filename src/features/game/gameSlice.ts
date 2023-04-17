import { createSlice } from "@reduxjs/toolkit";

interface IGameState {
  matchID: number | null;
}

const initialState: IGameState = {
  matchID: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeMatchID: (state, action) => {
      state.matchID = action.payload;
    },
  },
});

export const { changeMatchID } = gameSlice.actions;

export default gameSlice.reducer;
