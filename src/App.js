import CurrencyTable from './Currency.jsx';
import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base=UAH")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          console.log(error);
        }
      )
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
      <CurrencyTable/>
    </div>
  );
}

export default App;
