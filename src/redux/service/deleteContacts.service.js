import { axiosConfig } from 'redux/auth/auth-operations';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const deleteApiContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axiosConfig.delete(`/contacts/${id}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
