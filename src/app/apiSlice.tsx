import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

import type { RootState } from "./store";

import { addToken, logout } from "../features/auth/authSlice";

const baseApiQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/",
  mode: "cors",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseApiQuery(args, api, extraOptions);

  if (result.error && result.error.status === 403) {
    const refreshResult = await baseApiQuery(
      "/api/auth/refresh",
      api,
      extraOptions
    );
    if (refreshResult.data) {
      const data = refreshResult.data as {
        accessToken: string;
        username: string;
      };
      api.dispatch(
        addToken({ username: data.username, accessToken: data.accessToken })
      );
      result = await baseApiQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["UserInfo", "RecentMatches"],
  endpoints: () => ({}),
});
