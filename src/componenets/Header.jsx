import React from 'react';

const Header = ({data: {rates: {USD, EUR}}}) => {

  return (
    <header>
      <h2>Current currency UAH</h2>
      <div>EUR {(1/EUR).toFixed(2)}</div>
      <div>USD {(1/USD).toFixed(2)}</div>
    </header>
  )
}

export default Header;