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

export const generalInfoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlayerBasicInfo: builder.query<IUser, void>({
      query: () => ({
        url: "/api/user/info/basic",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPlayerBasicInfoQuery } = generalInfoApiSlice;
