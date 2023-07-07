import { createSlice } from "@reduxjs/toolkit";

const uislice = createSlice({
  name: "ui",
  initialState: { showcart: false, notification: null },
  reducers: {
    toggle(state) {
      state.showcart = !state.showcart;
    },
    shownotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export default uislice.reducer;
export const uiactions = uislice.actions;
