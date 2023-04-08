import { apiSlice } from "./apiSlice";

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
export interface IStatistics {
  game: string;
  wins: number;
  loses: number;
}

export interface IUserInfo {
  id: number;
  name: string;
  avatar: string;
  statistics: IStatistics[];
  position: number;
  level: number;
}

export interface IRecords {
  [key: string]: {
    gameName: string;
    userName: string;
    userID: number;
    totalWins: number;
  }[];
}

export const generalInfoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlayerRanking: builder.query<IRanking[], number>({
      query: (limit) => ({
        url: "/api/ranking",
        method: "GET",
        params: {
          limit,
        },
      }),
    }),
    getRecentMatches: builder.query<IRecentMatches[], number>({
      query: (limit) => ({
        url: "/api/match",
        method: "GET",
        params: {
          limit,
        },
      }),
    }),
    getPlayerInfoFromRanking: builder.query<IUserInfo, number>({
      query: (userID) => ({
        url: "/api/ranking/user",
        method: "GET",
        params: {
          userID,
        },
      }),
    }),
    getRecords: builder.query<IRecords, void>({
      query: () => ({
        url: "/api/records",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetPlayerRankingQuery,
  useGetRecentMatchesQuery,
  useGetPlayerInfoFromRankingQuery,
  useGetRecordsQuery,
} = generalInfoApiSlice;