/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const PERIPHERALS_URL = 'http://127.0.0.1:4000/api/v1/peripherals';

export const fetchPeripherals = createAsyncThunk(
  'peripherals/fetchPeripherals',
  async () => {
    const response = await axios.get(PERIPHERALS_URL);
    return response.data;
  },
);

const initialState = {
  peripherals: [],
  status: 'idle',
};

export const peripheralsSlice = createSlice({
  name: 'peripherals',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPeripherals.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.peripherals = action.payload;
    });
  },
});

export default peripheralsSlice.reducer;
