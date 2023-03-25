import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITokenData {
  username: string;
  accessToken: string;
}

interface IAuthSlice {
  username: string | null;
  token: string | null;
}

const initialState: IAuthSlice = {
  username: null,
  token: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<ITokenData>) => {
      state.token = action.payload.accessToken;
      state.username = action.payload.username;
    },
    removeToken: (state) => {
      state.token = null;
      state.username = null;
    },
  },
});

export const { addToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
