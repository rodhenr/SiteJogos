import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPayloadToken {
  username: string;
  token: string;
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
    addToken: (state, action: PayloadAction<IPayloadToken>) => {
      state.token = action.payload.token;
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
