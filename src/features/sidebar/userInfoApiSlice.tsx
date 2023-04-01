import { apiSlice } from "../../app/apiSlice";
import { IStatistics } from "../matches/generalInfoApiSlice";

export interface IPlayerBasicInfo {
  avatar: "";
  experience: number;
  id: number;
  level: number;
  maxExperience: string;
  name: string;
}

export interface IPlayerRecentMatches {
  id: number;
  date: Date;
  is_win: boolean;
  "User.name": string;
  "Game.name": string;
}

export interface IPlayerCompleteInfo {
  avatar: "";
  experience: number;
  friends: {
    userID1: number;
    userID2: number;
    date: Date;
    "User.avatar": string;
    "User.id": number;
    "User.name": string;
  }[];
  id: number;
  level: number;
  maxExperience: string;
  name: string;
  position: number;
  statistics: IStatistics[];
}

export const generalInfoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlayerBasicInfo: builder.query<IPlayerBasicInfo, void>({
      query: () => ({
        url: "/api/user/basic",
        method: "GET",
      }),
    }),
    getPlayerRecentMatches: builder.query<IPlayerRecentMatches[] | [], number>({
      query: (limit) => ({
        url: "/api/match/user",
        method: "GET",
        params: {
          limit,
        },
      }),
    }),
    getPlayerCompleteInfo: builder.query<IPlayerCompleteInfo, void>({
      query: () => ({
        url: "/api/user/complete",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetPlayerBasicInfoQuery,
  useGetPlayerRecentMatchesQuery,
  useGetPlayerCompleteInfoQuery,
} = generalInfoApiSlice;
