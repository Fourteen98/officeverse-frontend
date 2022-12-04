/* eslint-disable */
import React from 'react';
import { Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { notificationActions } from '../redux/notification/notificationSlice';

function Notification({ type, message }) {
  const notification = useSelector((state) => state.notification.notification);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(notificationActions.showNotification({ open: false }));
  };
  return (
    <div>
      {notification.open && <Alert onClose={handleClose} severity={type}>{message}</Alert>}
    </div>
  );
}

export default Notification;
