import { configureStore } from '@reduxjs/toolkit';
import currencySlice from './reducer';

export const store = configureStore({
  reducer: {
      currencyApp: currencySlice,
  },
})

export default store;

