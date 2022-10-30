import React, {useState} from 'react';
import useFetch from '../utils/useFetch';

const CurrencyTable = ({data: {rates: {USD, EUR}}}) => {
  const [select, setSelect] = useState("USD");
  const [input, setInput] = useState(0);

  const URL = 'https://api.exchangerate.host/latest?base=UAH';

  useFetch(URL)
  const handleExchange = (event)=>{
   setInput(event.target.value);
  }

  const handleSelectChange = (event)=>{
    setSelect(event.target.value);
  }

  const options = [
    {
      value: "USD",
      label: "USD"
    },
    {
      value: "EUR",
      label: "EUR"
   },
   {
      value: "UAH",
      label: "UAH"
    }
  ]

  const result = {
    USD: (input * (1/USD)).toFixed(2),
    EUR: (input * (1/EUR)).toFixed(2),
    UAH: (input * 1).toFixed(2),
  }

  return (
    <>
      <main>
          <input type="number"
                 onChange={handleExchange}
                 min={0}
                 input={input}
          />
          <select  onChange={handleSelectChange}>
            {options.map((item,index)=>
              <option 
                key={index} 
                value={item.value}
              >
                {item.label}
              </option>
            )}
          </select>
          <p>
            {result[select] ? result[select] : 0}
          </p>
      </main>
    </>
  )
}

export default CurrencyTable;