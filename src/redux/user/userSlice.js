/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { notificationActions } from '../notification/notificationSlice';

const USER_URL = 'http://127.0.0.1:4000/';
const headerUser = {
  headers: {
    Authorization: localStorage.getItem('token'),
  },
};

export const fetchCurrentUser = createAsyncThunk(
  'user/fetchCurrentUser',
  async () => {
    const response = await axios.get(`${USER_URL}current_user`, headerUser);
    return response.data;
  },
);

export const createUser = createAsyncThunk(
  'user/createUser',
  async ({
    first_name, last_name, username, email, password,
  }, { dispatch }) => {
    dispatch(notificationActions.showNotification({
      message: 'Sending user..',
      type: 'info',
      open: true,
    }));

    const sendCreateUser = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      console.log(first_name, last_name, username, email, password);
      const response = await axios.post(`${USER_URL}signup`, JSON.stringify({
        user: {
          first_name, last_name, username, email, password,
        },
      }), config);
      dispatch(notificationActions.showNotification({
        message: 'User added successfully!',
        type: 'success',
        open: true,
      }));
      localStorage.setItem('token', response.headers.get('Authorization'));
      return response.data;
    };
    try {
      await sendCreateUser();
    } catch (error) {
      dispatch(notificationActions.showNotification({
        message: 'Could not add user!',
        type: 'error',
        open: true,
      }));
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, { dispatch }) => {
    dispatch(notificationActions.showNotification({
      message: 'Loggin user..',
      type: 'info',
      open: true,
    }));

    const sendLoginUser = async () => {
      const response = await axios.post(`${USER_URL}login`, user);
      dispatch(notificationActions.showNotification({
        message: 'User Logged In successfully!',
        type: 'success',
        open: true,
      }));
      localStorage.setItem('token', response.headers.get('Authorization'));
      return response.data;
    };
    try {
      await sendLoginUser();
    } catch (error) {
      dispatch(notificationActions.showNotification({
        message: 'Could not Loggin!',
        type: 'error',
        open: true,
      }));
    }
  },
);

/* const initialState = {
  user: '',
  status: 'idle',
}; */

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.status = 'succeeded';
      });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
