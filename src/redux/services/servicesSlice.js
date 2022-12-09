/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const SERVICES_URL = 'http://127.0.0.1:4000/api/v1/services';

export const fetchServices = createAsyncThunk(
  'services/fetchService',
  async () => {
    const response = await axios.get(SERVICES_URL);
    return response.data;
  },
);

const initialState = {
  services: [],
  status: 'idle',
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.services = action.payload;
    });
  },
});

export default servicesSlice.reducer;
