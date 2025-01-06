// modalsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginModalOpen: false,
  registerModalOpen: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openLoginModal(state) {
      state.loginModalOpen = true;
      state.registerModalOpen = false;
    },
    openRegisterModal(state) {
      state.registerModalOpen = true;
      state.loginModalOpen = false;
    },
    closeModals(state) {
      state.loginModalOpen = false;
      state.registerModalOpen = false;
    },
  },
});

export const { openLoginModal, openRegisterModal, closeModals } = modalsSlice.actions;
export default modalsSlice.reducer;
