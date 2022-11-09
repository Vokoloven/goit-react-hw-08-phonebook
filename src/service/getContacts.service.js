import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getApiContactsConfig = axios.create({
  baseURL: 'https://63697a5415219b849618e278.mockapi.io/api/v1/',
  method: 'get',
});

export const getApiContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (_, thunkAPI) => {
    try {
      const response = await getApiContactsConfig.get('contacts');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
