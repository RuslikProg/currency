import CurrencyTable from './Currency.jsx';
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getCurrency} from './currencyThunk';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.currencyApp);

  useEffect(() => {
    dispatch(getCurrency())
  }, []);

  return (
    <div className="App">
      <header>
        <h2>Current currency UAH</h2>
        <div>EUR {(1/data?.rates?.EUR).toFixed(2)}</div>
        <div>USD {(1/data?.rates?.USD).toFixed(2)}</div>
      </header>
      <CurrencyTable 
      />
      <CurrencyTable
      />
    </div>
  );
}

export default App;
