import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const postApiContactsConfig = axios.create({
  baseURL: 'https://63697a5415219b849618e278.mockapi.io/api/v1/',
  method: 'post',
});

export const postApiContacts = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await postApiContactsConfig.post('contacts', contact);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
