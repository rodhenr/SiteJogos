import { ITokenData } from "./authSlice";

import { apiSlice } from "../../app/apiSlice";

interface IRegister {
  name: string;
  user: string;
  password: string;
}

export interface IError {
  data: { message: string };
}

interface ILoginData {
  user: string;
  password: string;
}

export const generalInfoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<void, IRegister>({
      query: (data) => ({
        url: "/api/auth/register",
        method: "POST",
        body: { ...data },
      }),
    }),
    login: builder.mutation<ITokenData, ILoginData>({
      query: (data) => ({
        url: "/api/auth/login",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginMutation } =
  generalInfoApiSlice;
