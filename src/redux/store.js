import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from 'redux/getContactsSlice';

export const store = configureStore({
  reducer: {
    contactsDatabase: contactSlice.reducer,
  },
});
