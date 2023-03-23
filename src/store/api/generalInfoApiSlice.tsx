import { apiSlice } from "./apiSlice";

import { IRanking, IRecentMatches } from "../slices/generalInfoSlice";

export const generalInfoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlayerRanking: builder.query<IRanking[], void>({
      query: () => ({
        url: "/api/info/ranking",
        method: "GET",
      }),
    }),
    getRecentMatches: builder.query<IRecentMatches[], void>({
      query: () => ({
        url: "/api/info/recent",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPlayerRankingQuery, useGetRecentMatchesQuery } =
  generalInfoApiSlice;
