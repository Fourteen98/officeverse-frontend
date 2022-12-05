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
      /* const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }; */
      fetch('http://127.0.0.1:4000/signup', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            first_name, last_name, username, email, password,
          },
        }),
      })
        .then((res) => {
          if (res.ok) {
            localStorage.setItem('token', res.headers.get('Authorization'));
          }
        });
      /* const response = await axios.post(`${USER_URL}signup`, {
        user: {
          first_name, last_name, username, email, password,
        },
      }, config).catch((e) => console.log(e)); */
      dispatch(notificationActions.showNotification({
        message: 'User added successfully!',
        type: 'success',
        open: true,
      }));
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
      const response = await fetch('http://127.0.0.1:4000/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user,
        }),
      })
        .then((res) => {
          if (res.ok) {
            localStorage.setItem('token', res.headers.get('Authorization'));
            dispatch(notificationActions.showNotification({
              message: 'User Logged In successfully!',
              type: 'success',
              open: true,
            }));
            return res;
          }
          return '';
        });
      localStorage.setItem('token', response.headers.get('Authorization'));
      return response.data;
    };
    try {
      await sendLoginUser();
    } catch (error) {
      console.log(error);
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
        state.success = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.status = 'succeeded';
      });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
