import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const deleteApiContactsConfig = axios.create({
  baseURL: 'https://63697a5415219b849618e278.mockapi.io/api/v1/',
  method: 'delete',
});

export const deleteApiContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (id, thunkAPI) => {
    try {
      const response = await deleteApiContactsConfig.delete(`contacts/${id}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
