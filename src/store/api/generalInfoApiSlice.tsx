import { apiSlice } from "./apiSlice";

import { IRanking, IRecentMatches } from "../slices/generalInfoSlice";

interface IStatistics {
  game: string;
  wins: number;
  loses: number;
}

export interface IUserInfo {
  id: number;
  name: string;
  avatar: string;
  statistics: IStatistics[];
  ranking: number;
  level: number;
}

export const generalInfoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlayerRanking: builder.query<IRanking[], number>({
      query: (limit) => ({
        url: "/api/info/ranking",
        method: "GET",
        params: {
          limit,
        },
      }),
    }),
    getRecentMatches: builder.query<IRecentMatches[], number>({
      query: (limit) => ({
        url: "/api/info/recent",
        method: "GET",
        params: {
          limit,
        },
      }),
    }),
    getPlayerInfoFromRanking: builder.query<IUserInfo, number>({
      query: (userID) => ({
        url: "/api/info/ranking/user",
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
