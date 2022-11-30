/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const OFFICES_URL = 'http://127.0.0.1:4000/api/v1/offices';

export const fetchOffice = createAsyncThunk(
  'offices/fetchOffice',
  async () => {
    const response = await axios.get(OFFICES_URL);
    return response.data;
  },
);

const initialState = {
  offices: [],
  status: 'idle',
};

export const officesSlice = createSlice({
  name: 'offices',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOffice.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.offices = action.payload;
    });
  },
});

export default officesSlice.reducer;
