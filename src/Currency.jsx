import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getCurrency} from './currencyThunk';

const CurrencyTable = () => {
  const [select, setSelect] = useState("USD");
  const [input, setInput] = useState(0);

  const dispatch = useDispatch();
  const {data} = useSelector(state => state.currencyApp);

  useEffect(() => {
    dispatch(getCurrency())
  }, []);

  console.log('data', data)
 

  const handleExchange = (event)=>{
   setInput(event.target.value);
  }

  const handleSelectChange = (event)=>{
    setSelect(event.target.value);
  }

  let USD = 1/data?.rates?.USD;
  let EUR = 1/data?.rates?.EUR;
  let UAH = 1;
 
  const result = {
    USD: (input * USD).toFixed(2),
    EUR: (input * EUR).toFixed(2),
    UAH: (input * UAH).toFixed(2),
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
            <option value="USD">US</option>
            <option value="UAH">UA</option>
            <option value="EUR">EU</option>
          </select>
          <p>
            {result[select] ? result[select] : 0}
          </p>
      </main>
    </>
  )
}

export default CurrencyTable;