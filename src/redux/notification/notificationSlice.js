import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notification: {
    open: false,
    message: '',
    type: '',
  },
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = { // eslint-disable-line no-param-reassign
        open: action.payload.open,
        message: action.payload.message,
        type: action.payload.type,
      };
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice;
