import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IModalState {
  historyModal: boolean;
  profileModal: boolean;
  messagesModal: boolean;
}

const initialState: IModalState = {
  historyModal: false,
  profileModal: false,
  messagesModal: false,
};

const modalSlice = createSlice({
  name: "modal",
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
  modalSlice.actions;

export const selectHistoryModalState = (state: RootState) =>
  state.modals.historyModal;

export const selectProfileModalState = (state: RootState) =>
  state.modals.profileModal;

export default modalSlice.reducer;
