import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {rates: {USD:0, EUR:0}},
  loading: false,
};

export const currencySlice = createSlice({
  name: 'currencyApp',
  initialState: initialState,
  reducers: {
    getCurrency: (state)=>{
      return {
        ...state,
        loading: true,
      }
    },
    getCurrencyError: (state)=>{
      return {
        ...state,
        loading: false
      }
    },
    getCurrencySuccess: (state, {payload})=>{
      return {
        ...state,
        loading: false,
        data: payload
      }
    }
  },
});

export const {
	getCurrency,
	getCurrencyError,
	getCurrencySuccess,
} = currencySlice.actions;


export default currencySlice.reducer;