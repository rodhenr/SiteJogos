import { apiSlice } from "./apiSlice";

export interface IUser {
  avatar: "";
  experience: number;
  id: number;
  level: number;
  maxExperience: number;
  name: string;
  password: string;
}

export interface IPlayerRecentMatches {
  id: number;
  date: Date;
  is_win: boolean;
  "User.name": string;
  "Game.name": string;
}

export const generalInfoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlayerBasicInfo: builder.query<IUser, void>({
      query: () => ({
        url: "/api/user/info/basic",
        method: "GET",
      }),
    }),
    getPlayerRecentMatches: builder.query<IPlayerRecentMatches[] | [], number>({
      query: (limit) => ({
        url: "/api/user/info/matches",
        method: "GET",
        params: {
          limit,
        },
      }),
    }),
  }),
});

export const { useGetPlayerBasicInfoQuery, useGetPlayerRecentMatchesQuery } =
  generalInfoApiSlice;
