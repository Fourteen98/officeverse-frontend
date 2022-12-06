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
    console.log(headerUser);
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
  // eslint-disable-next-line consistent-return
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
        // eslint-disable-next-line consistent-return
        .then((res) => {
          if (res.ok) {
            localStorage.setItem('token', res.headers.get('Authorization'));
            fetchCurrentUser();
            dispatch(notificationActions.showNotification({
              message: 'User Logged In successfully!',
              type: 'success',
              open: true,
            }));
            /* console.log(Object.keys(res.headers)); */
            return res;
          }
        });
      // localStorage.setItem('token', response.headers.get('Authorization'));
      return response;
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
  loggedIn: false, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.loading = false;
      state.status = 'idle'; // deletes token from storage
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.success = true;
        state.loggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.loggedIn = true;
        // state.userInfo = payload;
        // state.userToken = payload.token;
        state.status = 'succeeded';
      });
  },
});

// export const userActions = userSlice.actions;
export const { logout } = userSlice.actions;
export default userSlice.reducer;
