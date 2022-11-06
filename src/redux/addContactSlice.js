import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactSlice = createSlice({
  name: 'contactDatabase',
  initialState: { contact: [], filter: '' },
  reducers: {
    addContacts: (state, action) => {
      state.contact = action.payload;
    },
    contactsFilter: (state, action) => {
      state.filter = [...action.payload];
    },
  },
});

export const { addContacts, contactsFilter } = contactSlice.actions;

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedContacts = persistReducer(
  persistConfig,
  contactSlice.reducer
);
