import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContacts: (state, action) => {
      return action.payload;
    },
  },
});

export const { addContacts } = contactSlice.actions;
