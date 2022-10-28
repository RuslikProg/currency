import { createSlice } from '@reduxjs/toolkit';
import {getCurrency} from './currencyThunk';

const initialState = {
  data: [],
  loading: false,
};

export const currencySlice = createSlice({
  name: 'currencyApp',
  initialState: initialState,
  reducers: {},
  extraReducers:{ 
    [getCurrency.pending]: (state) => {
      state.loading = true
  },
    [getCurrency.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
  },
    [getCurrency.rejected]: (state) => {
      state.loading = false
  },},
});

export default currencySlice.reducer;