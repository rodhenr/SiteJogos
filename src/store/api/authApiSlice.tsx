import { apiSlice } from "./apiSlice";

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

interface ILoginSuccess {
  username: string;
  token: string;
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
    login: builder.mutation<ILoginSuccess, ILoginData>({
      query: (data) => ({
        url: "/api/auth/auth",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginMutation } =
  generalInfoApiSlice;
