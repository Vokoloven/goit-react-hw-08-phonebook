import { createSlice } from '@reduxjs/toolkit';
import { getApiContacts } from 'service/getContacts.service';
import { postApiContacts } from 'service/postContacts.service';
import { deleteApiContacts } from 'service/deleteContacts.service';

export const contactSlice = createSlice({
  name: 'contactDatabase',
  initialState: {
    contact: { items: [], isLoading: false, error: null },
    filter: '',
  },
  reducers: {
    contactsFilter(state, action) {
      state.filter = [...action.payload];
    },
  },
  extraReducers: {
    [getApiContacts.pending](state, _) {
      state.contact.isLoading = true;
    },
    [getApiContacts.fulfilled](state, action) {
      state.contact.isLoading = false;
      state.contact.error = null;
      state.contact.items = action.payload;
    },
    [getApiContacts.rejected](state, action) {
      state.contact.isLoading = false;
      state.contact.items = action.payload;
    },
    [postApiContacts.pending](state, _) {
      state.contact.isLoading = true;
    },
    [postApiContacts.fulfilled](state, action) {
      state.contact.isLoading = false;
      state.contact.error = null;
      state.contact.items = [...state.contact.items, action.payload];
    },
    [postApiContacts.rejected](state, action) {
      state.contact.isLoading = false;
      state.contact.items = action.payload;
    },
    [deleteApiContacts.pending](state, _) {
      state.contact.isLoading = true;
    },
    [deleteApiContacts.fulfilled](state, action) {
      state.contact.isLoading = false;
      state.contact.error = null;
      state.contact.items = state.contact.items.filter(
        ({ id }) => id !== action.payload.id
      );
    },
    [deleteApiContacts.rejected](state, action) {
      state.contact.isLoading = false;
      state.contact.items = action.payload;
    },
  },
});

export const { contactsFilter } = contactSlice.actions;
