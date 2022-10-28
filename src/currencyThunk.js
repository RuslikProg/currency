import {createAsyncThunk} from '@reduxjs/toolkit';

 export const getCurrency = createAsyncThunk(
  'currencyApp/getCurrency',
  async () => {
    const res = await fetch("https://api.exchangerate.host/latest?base=UAH")
    .then((data1) => data1.json())
    .catch(error => console.log('error', error));
  return res
});