import React, {useEffect, useState} from 'react';

const CurrencyTable = () => {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState('');
  const [input, setInput] = useState('');

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

  const handleExchange = (event)=>{
   setInput(event.target.value);
  }

  const handleSelectChange = (event)=>{
    setSelect(event.target.value);
  }

  let USD = (1/data?.rates?.USD).toFixed(2);
  let EUR = (1/data?.rates?.EUR).toFixed(2);
  let UAH = 1;

  return (
    <>
      <main>
        <div name='one'>
          <input type="number"
                 onChange={handleExchange}
                 min={0}
                 input={input}
          />
      <select  onChange={handleSelectChange}>
        <option value="USD">US Dollar</option>
        <option value="UAH">UA Hrivna</option>
        <option value="EUR">EU Euro</option>
      </select>
          <div>
            {(select === "USD" 
              ? input * USD 
              : select === "EUR" 
              ? input * EUR 
              : input * UAH).toFixed(2)
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default CurrencyTable;