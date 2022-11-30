import { configureStore } from '@reduxjs/toolkit';
import officesReducer from './offices/officesSlice';
import reservationsReducer from './reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    offices: officesReducer,
    reservations: reservationsReducer,
  },
});

export default store;
