import { apiSlice } from "./apiSlice";

export interface IRanking {
  id: number;
  name: string;
  level: number;
  position: number;
}

export interface IRecentMatches {
  matchProcessingHistoryID: number;
  userID: number;
  id: number;
  date: Date;
  "User.name": string;
  "Game.name": string;
  "MatchProcessingHistory.Config_MatchResult.id": number;
  "MatchProcessingHistory.Config_MatchResult.matchResult": string;
  "MatchProcessingHistory.date": Date;
  "MatchProcessingHistory.id": number;
  "MatchProcessingHistory.matchID": number;
  "MatchProcessingHistory.matchResultID": number;
}
export interface IStatistics {
  game: string;
  wins: number;
  loses: number;
  draws: number;
}

export interface IUserInfo {
  id: number;
  name: string;
  avatar: string;
  statistics: IStatistics[];
  position: number;
  level: number;
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
  }),
});

export const {
  useGetPlayerRankingQuery,
  useGetRecentMatchesQuery,
  useGetPlayerInfoFromRankingQuery,
} = generalInfoApiSlice;
