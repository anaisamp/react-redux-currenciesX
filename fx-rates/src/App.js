import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getExchangeRate } from './actions/getExchangeRate';


const currencies = [
  { symbol: 'GBP', currency: '£' },
  { symbol: 'EUR', currency: '€' },
  { symbol: 'USD', currency: '$' }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      from: 'EUR',
      to: 'GBP',
      valueTo: '',
      valueFrom: '',
    }
  }

  componentDidMount() {
    this.props.getExchangeRate();
    //this.interval = setInterval(() => this.props.getExchangeRate(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  shouldComponentUpdate(nextProps, nextState) {
   return this.props !== nextProps || this.state !== nextState;
  }

  handleExchangeRate = (e) => {
    // send selected rates as props, then filter !currency
    const value = e.target.value;
    const exhangeValue = parseFloat(value) * this.props.rates[this.state.to];

    this.setState({
      valueFrom: parseFloat(value),
      valueTo: exhangeValue.toFixed(2)
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Exchange</h1>
        </header>
        <p className="App-intro">
          {currencies.find(c => c.symbol === this.state.from).currency} 
          1 
          = {currencies.find(c => c.symbol === this.state.to).currency} 
          {this.props.rates && this.props.rates[this.state.to].toFixed(4)}
        </p>
        
        <div>
          <select name={`select${this.state.to}`} value={this.state.from} onChange={this.handleChangeFormCurrency}>
            { currencies.map(currency => 
              <option value={currency.symbol} key={currency.symbol}>
                { currency.symbol }
              </option>)
            }
          </select>
          <input type="number" step="0.01" value={this.state.valueFrom} name={this.state.from} onChange={this.handleExchangeRate} />
        </div>
        <div>
          <select value={this.state.to} onChange={this.handleChangeToCurrency}>
            {currencies.map(currency =>
              <option value={currency.symbol} key={currency.symbol}>
                {currency.symbol}
              </option>)
            }
          </select>
          <input type="number" step="0.01" value={this.state.valueTo} name={this.state.to} onChange={this.handleExchangeRate} /> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({exchangeRate}) => ({
  ...exchangeRate
});

const mapDispatchToProps = dispatch => ({
  getExchangeRate: () => dispatch(getExchangeRate())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
