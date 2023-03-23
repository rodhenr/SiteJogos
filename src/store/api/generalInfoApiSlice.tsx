import { apiSlice } from "./apiSlice";

import { IRanking, IRecentMatches } from "../slices/generalInfoSlice";

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
  }),
});

export const { useGetPlayerRankingQuery, useGetRecentMatchesQuery } =
  generalInfoApiSlice;
