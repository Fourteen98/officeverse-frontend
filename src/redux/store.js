import { configureStore } from '@reduxjs/toolkit';
import officesReducer from './offices/officesSlice';

const store = configureStore({
  reducer: {
    offices: officesReducer,
  },
});

export default store;
