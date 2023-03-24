import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IRanking {
  id: number;
  name: string;
  level: number;
  position: number;
}

export interface IRecentMatches {
  id: number;
  date: Date;
  is_win: boolean;
  is_processed: boolean;
  "User.name": string;
  "Game.name": string;
}

interface IInitialState {
  ranking: IRanking[] | [];
  recentMatches: IRecentMatches[] | [];
  selectedUserID: number | null;
}

const initialState: IInitialState = {
  ranking: [],
  recentMatches: [],
  selectedUserID: null,
};

const generalInfoSlice = createSlice({
  name: "generalInfo",
  initialState,
  reducers: {
    setRankingInfo: (state, action: PayloadAction<IRanking[]>) => {
      state.ranking = action.payload;
    },
    setRecentMatches: (state, action: PayloadAction<IRecentMatches[]>) => {
      state.recentMatches = action.payload;
    },
    setUserID: (state, action: PayloadAction<number | null>) => {
      state.selectedUserID = action.payload;
    },
  },
});

export const { setRankingInfo, setRecentMatches, setUserID } =
  generalInfoSlice.actions;

export default generalInfoSlice.reducer;
