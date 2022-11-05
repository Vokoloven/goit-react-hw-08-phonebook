import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onFilter: (state, action) => action.payload,
  },
});

export const { onFilter } = filterSlice.actions;
