import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IModalState {
  historyModal: boolean;
  profileModal: boolean;
  recordsModal: boolean;
}

const initialState: IModalState = {
  historyModal: false,
  profileModal: false,
  recordsModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeHistoryModal: (state, action) => {
      state.historyModal = action.payload;
      state.profileModal = false;
      state.recordsModal = false;
    },
    changeProfileModal: (state, action) => {
      state.historyModal = false;
      state.profileModal = action.payload;
      state.recordsModal = false;
    },
    changeRecordsModal: (state, action) => {
      state.historyModal = false;
      state.profileModal = false;
      state.recordsModal = action.payload;
    },
  },
});

export const { changeHistoryModal, changeProfileModal, changeRecordsModal } =
  modalSlice.actions;

export const selectHistoryModalState = (state: RootState) =>
  state.modals.historyModal;

export const selectProfileModalState = (state: RootState) =>
  state.modals.profileModal;

export const selectRecordsModalState = (state: RootState) =>
  state.modals.recordsModal;

export default modalSlice.reducer;
