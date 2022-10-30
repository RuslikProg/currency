import { configureStore } from '@reduxjs/toolkit';
import { currencySlice } from './reducer';

export const store = configureStore({
  reducer: {
      currencyApp: currencySlice.reducer,
  },
})

export default store;

