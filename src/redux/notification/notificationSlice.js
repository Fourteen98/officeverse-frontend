import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    notification: null,
  },
  reducers: {
    showNotifcation(state, action) {
      state.notification = { // eslint-disable-line
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice;
