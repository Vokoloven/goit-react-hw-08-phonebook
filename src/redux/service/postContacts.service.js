import { axiosConfig } from 'redux/auth/auth-operations';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postApiContacts = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axiosConfig.post('/contacts', contact);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
