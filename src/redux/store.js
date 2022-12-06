import { configureStore } from '@reduxjs/toolkit';
import officesReducer from './offices/officesSlice';
import reservationsReducer from './reservations/reservationsSlice';
import servicesReducer from './services/servicesSlice';
import peripheralsReducer from './peripherals/peripheralsSlice';
import notificationSlice from './notification/notificationSlice';
import userSliceReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    offices: officesReducer,
    reservations: reservationsReducer,
    services: servicesReducer,
    peripherals: peripheralsReducer,
    notification: notificationSlice.reducer,
  },
});

export default store;
