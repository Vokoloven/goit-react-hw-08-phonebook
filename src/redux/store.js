import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistedContacts } from './addContactSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    contactsDatabase: persistedContacts,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
