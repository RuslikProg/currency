import CurrencyTable from './componenets/Currency.jsx';
import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './componenets/Header';

function App() {
  const {data} = useSelector(state => state.currencyApp);

  return (
    <div className="App">
      <Header
        data={data}
      />
      <CurrencyTable
        data={data}
      />
      <CurrencyTable
        data={data}
      />
    </div>
  );
}

export default App;
