import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface IModalState {
  profileModal: boolean;
}

const initialState: IModalState = {
  profileModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeProfileModal: (state, action) => {
      state.profileModal = action.payload;
    },
  },
});

export const { changeProfileModal } = modalSlice.actions;

export const selectProfileState = (state: RootState) =>
  state.sidebar.profileModal;

export default modalSlice.reducer;
