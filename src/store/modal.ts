import { createSlice } from "@reduxjs/toolkit";

const initialModalState = { showModal: false };

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    toggleModal(state) {
      document.body.classList.toggle("modal-open");
      state.showModal = !state.showModal;
    },
    showModal(state) {
      document.body.classList.add("modal-open");
      state.showModal = true;
    },
    hideModal(state) {
      document.body.classList.remove("modal-open");
      state.showModal = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
