import React, { Component } from 'react';
import PropTypes from 'prop-types';
import currencies from '../../constants/currencies';
import './convertForm.css';

class ConvertForm extends Component {
  componentDidMount() {
    this.focusFromInput();
  }

  focusFromInput = () => {
    if (this.props.selectName === 'from' && this.fromInput) {
      this.fromInput.focus();
    }
  }

  render() {
    const {
      selectName, selectedCurrency, inputValue, handleCurrencyChange, handleExchangeRate, balance,
    } = this.props;
    return (
      <div className="convert-form">
        <div className="convert-wrapper">
          <span className="select-wrapper">
            <select name={selectName} value={selectedCurrency} onChange={handleCurrencyChange}>
              { currencies.map(currency => (
                <option value={currency.symbol} key={currency.symbol}>
                  {currency.symbol}
                </option>
              ))
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
            ref={(input) => { this.fromInput = input; }}
          />
        </div>
        <p className="balance">
          Balance:
          {' '}
          {currencies.filter(c => c.symbol === selectedCurrency)[0].currency}
          {parseFloat(balance).toFixed(2)}
        </p>
      </div>
    );
  }
}
ConvertForm.propTypes = {
  selectName: PropTypes.string.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleCurrencyChange: PropTypes.func.isRequired,
  handleExchangeRate: PropTypes.func.isRequired,
  balance: PropTypes.string.isRequired,
};

export default ConvertForm;
