import { axiosConfig } from 'redux/auth/auth-operations';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getApiContacts = createAsyncThunk(
  'contacts/fetchAll',

  async (_, thunkAPI) => {
    try {
      const response = await axiosConfig.get('/contacts');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
