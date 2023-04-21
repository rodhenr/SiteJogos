import { apiSlice } from "./apiSlice";

export interface IRanking {
  id: number;
  name: string;
  level: number;
  position: number;
}

export interface IRecentMatches {
  matchProcessingID: number;
  userID: number;
  id: number;
  date: Date;
  "User.name": string;
  "Game.name": string;
  "MatchProcessing.Config_Result.id": number;
  "MatchProcessing.Config_Result.result": string;
  "MatchProcessing.date": Date;
  "MatchProcessing.id": number;
  "MatchProcessing.matchID": number;
  "MatchProcessing.resultID": number;
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
      providesTags: ["RecentMatches"],
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
