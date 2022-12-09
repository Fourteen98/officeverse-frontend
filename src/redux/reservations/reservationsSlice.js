/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
import { notificationActions } from '../notification/notificationSlice';

const RESERVATIONS_URL = 'http://127.0.0.1:4000/api/v1/users/';

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async (_, { getState }) => {
    const state = getState();
    const response = await axios.get(`${RESERVATIONS_URL}${state.user.user.id}/reservations`);
    return response.data;
  },
);

export const deleteReservation = createAsyncThunk(
  'reservations/deleteReservation',
  async (id, { dispatch, getState }) => {
    const state = getState();
    dispatch(notificationActions.showNotification({
      message: 'Deleting reservation...',
      type: 'info',
      open: true,
    }));
    const sendDeleteReservation = async () => {
      const response = await axios.delete(`${RESERVATIONS_URL}${state.user.user.id}/reservations/${id}`);
      dispatch(notificationActions.showNotification({
        message: 'Reservation deleted successfully!',
        type: 'success',
        open: true,
      }));
      return response.data;
    };
    try {
      await sendDeleteReservation();
    } catch (error) {
      dispatch(notificationActions.showNotification({
        message: 'Could not delete reservation!',
        type: 'error',
        open: true,
      }));
    }
  },
);

export const createReservation = createAsyncThunk(
  'reservations/createReservation',
  async (reservation, { dispatch, getState }) => {
    const state = getState();
    dispatch(notificationActions.showNotification({
      message: 'Sending reservation..',
      type: 'warning',
      open: true,
    }));
    const sendCreateReservation = async () => {
      const response = await axios.post(`${RESERVATIONS_URL}${state.user.user.id}/reservations`, reservation);
      dispatch(notificationActions.showNotification({
        message: 'Reservation created Successfully!',
        type: 'success',
        open: true,
      }));
      return response.data;
    };
    try {
      await sendCreateReservation();
    } catch (error) {
      dispatch(notificationActions.showNotification({
        message: 'Could not create reservation!',
        type: 'error',
        open: true,
      }));
    }
  },
);

const initialState = {
  reservations: [],
  status: 'idle',
};

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservations = action.payload;
      })
      .addCase(deleteReservation.fulfilled, (state) => {
        state.status = 'succeeded';
        // state.reservations = action.payload;
      })
      .addCase(createReservation.fulfilled, (state) => {
        state.status = 'succeeded';
      });
  },
});

export default reservationsSlice.reducer;
