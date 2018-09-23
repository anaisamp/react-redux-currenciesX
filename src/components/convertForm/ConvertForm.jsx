import React from 'react';
import { currencies } from '../../constants';
import './convertForm.css';

const ConvertForm = ({ selectName, selectedCurrency, inputValue, handleCurrencyChange, handleExchangeRate, balance }) => (
  <div className='convert-form'>
    <div className='convert-wrapper'>
      <span className='select-wrapper'>
        <select name={selectName} value={selectedCurrency} onChange={handleCurrencyChange}>
          { currencies.map(currency =>
            <option value={currency.symbol} key={currency.symbol}>
              {currency.symbol}
            </option>)
          }
        </select>
      </span>
      <input
        type="number"
        step="0.01"
        name={selectedCurrency}
        value={inputValue}
        onChange={handleExchangeRate}
        placeholder="0"
        min="0"
      />
    </div>
    <p className='balance'>Balance: {currencies.filter(c => c.symbol === selectedCurrency)[0].currency}
      {parseFloat(balance).toFixed(2)}
    </p>
  </div>
);

export default ConvertForm;