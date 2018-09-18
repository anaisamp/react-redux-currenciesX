import React from 'react';
import currencies from '../../constants';

const ConvertForm = ({ selectName, selectedCurrency, inputValue, handleCurrencyChange, handleExchangeRate }) => (
  <div>
    <select name={selectName} value={selectedCurrency} onChange={handleCurrencyChange}>
      { currencies.map(currency =>
        <option value={currency.symbol} key={currency.symbol}>
          {currency.symbol}
        </option>)
      }
    </select>
    <input
      type="number"
      step="0.01"
      name={selectedCurrency}
      value={inputValue}
      onChange={handleExchangeRate}
    />
  </div>
);

export default ConvertForm;