import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './addContactSlice';
import { filterSlice } from './addFilterSlice';

// Without Slicer just for me
// import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// const store = configureStore({ reducer: rootReducer });

// const increment = createAction('myValue/increment');
// console.log(increment());
// const decrement = createAction('myValue/decrement');

// const myReducer = createReducer(0, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });
// Without Slicer just for me

export const store = configureStore({
  reducer: { contacts: contactSlice.reducer, filter: filterSlice.reducer },
});
