/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

const initialState = {
  reservations: [],
  status: 'idle',
};

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.reservations = action.payload;
    });

    builder.addCase(deleteReservation.fulfilled, (state, action) => {
      state.status = 'succeeded';
      console.log(action.payload);
      // state.reservations = action.payload;
    });
  },
});

export default reservationsSlice.reducer;