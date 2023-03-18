import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IModalState {
  historyModal: boolean;
  profileModal: boolean;
  messagesModal: boolean;
  loginModal: boolean;
  registerModal: boolean;
}

const initialState: IModalState = {
  historyModal: false,
  profileModal: false,
  messagesModal: false,
  loginModal: false,
  registerModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeHistoryModal: (state, action) => {
      state.historyModal = action.payload;
      state.profileModal = false;
      state.messagesModal = false;
      state.loginModal = false;
      state.registerModal = false;
    },
    changeProfileModal: (state, action) => {
      state.historyModal = false;
      state.profileModal = action.payload;
      state.messagesModal = false;
      state.loginModal = false;
      state.registerModal = false;
    },
    changeMessagesModal: (state, action) => {
      state.historyModal = false;
      state.profileModal = false;
      state.messagesModal = action.payload;
      state.loginModal = false;
      state.registerModal = false;
    },
    changeLoginModal: (state, action) => {
      state.historyModal = false;
      state.profileModal = false;
      state.messagesModal = false;
      state.loginModal = action.payload;
      state.registerModal = false;
    },
    changeRegisterModal: (state, action) => {
      state.historyModal = false;
      state.profileModal = false;
      state.messagesModal = false;
      state.loginModal = false;
      state.registerModal = action.payload;
    },
  },
});

export const {
  changeHistoryModal,
  changeLoginModal,
  changeMessagesModal,
  changeProfileModal,
  changeRegisterModal,
} = modalSlice.actions;

export const selectHistoryModalState = (state: RootState) =>
  state.modals.historyModal;

export const selectProfileModalState = (state: RootState) =>
  state.modals.profileModal;

export default modalSlice.reducer;
