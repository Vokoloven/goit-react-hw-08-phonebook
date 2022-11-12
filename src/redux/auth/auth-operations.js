import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const axiosConfig = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const token = {
  set(token) {
    axiosConfig.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axiosConfig.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axiosConfig.post('/users/signup', credentials);
      token.set(data.token);
      console.log(axiosConfig.defaults.headers);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const logIn = createAsyncThunk('auth/logIn', async (credentials, thunkAPI) => {
  try {
    const { data } = await axiosConfig.post('/users/login', credentials);
    token.set(data.token);
    console.log(axiosConfig.defaults.headers);

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axiosConfig.post('/users/logout');
    token.unset();
    console.log(axiosConfig.defaults.headers);
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const operations = {
  register,
  logIn,
  logOut,
};

export default operations;
