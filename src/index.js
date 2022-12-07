import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
// import { fetchCurrentUser } from './redux/user/userSlice';
import { fetchOffice } from './redux/offices/officesSlice';
import { fetchReservations } from './redux/reservations/reservationsSlice';
import { fetchServices } from './redux/services/servicesSlice';
import { fetchPeripherals } from './redux/peripherals/peripheralsSlice';

store.dispatch(fetchOffice());
store.dispatch(fetchReservations());
store.dispatch(fetchServices());
store.dispatch(fetchPeripherals());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App className="" />
    </Provider>
  </React.StrictMode>,
);
