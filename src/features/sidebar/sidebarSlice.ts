import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface ISidebarState {
  historyModal: boolean;
  profileModal: boolean;
  messagesModal: boolean;
}

const initialState: ISidebarState = {
  historyModal: false,
  profileModal: false,
  messagesModal: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    changeHistoryModal: (state, action) => {
      state.historyModal = action.payload;
      state.profileModal = false;
      state.messagesModal = false;
    },
    changeProfileModal: (state, action) => {
      state.historyModal = false;
      state.profileModal = action.payload;
      state.messagesModal = false;
    },
    changeMessagesModal: (state, action) => {
      state.historyModal = false;
      state.profileModal = false;
      state.messagesModal = action.payload;
    },
  },
});

export const { changeHistoryModal, changeMessagesModal, changeProfileModal } =
  sidebarSlice.actions;

export const selectHistoryState = (state: RootState) =>
  state.sidebar.historyModal;

export const selectProfileState = (state: RootState) =>
  state.sidebar.profileModal;

export const selectMessagesState = (state: RootState) =>
  state.sidebar.messagesModal;

export default sidebarSlice.reducer;
