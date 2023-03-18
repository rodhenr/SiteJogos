import { createSlice } from "@reduxjs/toolkit";

interface IToken {
  userID: string | null;
  token: string | null;
}

const initialState: IToken = {
  userID: null,
  token: null,
};

const tokenSlice = createSlice({
  name: "tokenSlice",
  initialState,
  reducers: {
    setTokenInfo: (state, action) => {},
  },
});

export const { setTokenInfo } = tokenSlice.actions;

export default tokenSlice.reducer;
