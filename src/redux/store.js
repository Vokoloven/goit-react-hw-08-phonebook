import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from 'redux/getContactsSlice';
import { persistedAuthReducer } from './auth/authSlice';
import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    contactsDatabase: contactSlice.reducer,
    authOperations: persistedAuthReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
