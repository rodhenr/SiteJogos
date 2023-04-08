import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITokenData {
  username: string;
  accessToken: string;
}

interface IAuthSlice {
  username: string | null;
  token: string | null;
  loginModal: boolean;
  registerModal: boolean;
}

const initialState: IAuthSlice = {
  username: null,
  token: null,
  loginModal: false,
  registerModal: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<ITokenData>) => {
      state.token = action.payload.accessToken;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.token = null;
      state.username = null;
    },
    changeLoginModal: (state, action) => {
      state.loginModal = action.payload;
      state.registerModal = false;
    },
    changeRegisterModal: (state, action) => {
      state.loginModal = false;
      state.registerModal = action.payload;
    },
  },
});

export const { addToken, changeLoginModal, changeRegisterModal, logout } =
  authSlice.actions;

export default authSlice.reducer;
