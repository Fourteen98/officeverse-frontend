import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notification: null,
  },
  reducers: {
    showNotifcation(state, action) {
      state.notification = { // eslint-disable-line
        open: action.open,
        message: action.message,
        type: action.type,
      };
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice;
