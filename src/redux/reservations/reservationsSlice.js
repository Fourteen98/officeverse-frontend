/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
import { notificationActions } from '../notification/notificationSlice';

const RESERVATIONS_URL = 'http://127.0.0.1:4000/api/v1/users/1/reservations';

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    const response = await axios.get(RESERVATIONS_URL);
    return response.data;
  },
);

export const deleteReservation = createAsyncThunk(
  'reservations/deleteReservation',
  async (id) => {
    const response = await axios.delete(`http://127.0.0.1:4000/api/v1/users/1/reservations/${id}`);
    return response.data;
  },
);

export const createReservation = createAsyncThunk(
  'reservations/createReservation',
  async (reservation, { dispatch }) => {
    dispatch(notificationActions.showNotification({
      message: 'Sending Reservation..',
      type: 'warning',
      open: true,
    }));
    const sendReservation = async () => {
      const response = await axios.post(RESERVATIONS_URL, reservation);
      dispatch(notificationActions.showNotification({
        message: 'Reservation Created Successfully!',
        type: 'success',
        open: true,
      }));
      return response.data;
    };
    try {
      await sendReservation();
    } catch (error) {
      dispatch(notificationActions.showNotification({
        message: 'Reservation Failed!',
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
