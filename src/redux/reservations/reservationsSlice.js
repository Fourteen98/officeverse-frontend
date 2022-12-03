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
  async (data, { dispatch }) => {
    console.log('data', data);
    dispatch(notificationActions.showNotification({ message: 'Creating Reservation..', type: 'warning', open: true }));
    console.log('dispatch notification');
    const response = await axios.post(RESERVATIONS_URL, data);
    return response.data;
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
