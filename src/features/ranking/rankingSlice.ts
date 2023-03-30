import { createSlice } from "@reduxjs/toolkit";

interface IStatistics {
  game: string;
  loses: number;
  wins: number;
}

interface IPlayerInfo {
  playerID: string | null;
  playerName: string | null;
  playerAvatar: string | null;
  level: number | null;
  ranking: number | null;
  statistics: IStatistics[] | [];
}

const initialState: IPlayerInfo = {
  playerID: null,
  playerName: null,
  playerAvatar: null,
  level: null,
  ranking: null,
  statistics: [],
};

const rankingSlice = createSlice({
  name: "rankingSlice",
  initialState,
  reducers: {
    updatePlayerInfo: (state, action) => {
      state.playerID = action.payload.playerID;
      state.playerName = action.payload.playerName;
      state.playerAvatar = action.payload.playerAvatar;
      state.level = action.payload.level;
      state.ranking = action.payload.ranking;
      state.statistics = action.payload.statistics;
    },
  },
});

export const { updatePlayerInfo } = rankingSlice.actions;

export default rankingSlice.reducer;
