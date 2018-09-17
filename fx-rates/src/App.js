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
      toValue: '',
      fromValue: '',
    }
  }

  componentDidMount() {
    this.props.getExchangeRate(this.state.from);
    this.props.getExchangeRate(this.state.to);
    //this.interval = setInterval(() => this.props.getExchangeRate(), 10000); // service worker??
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
    const currencyBase = e.target.name;
    const currencyTo = currencyBase === this.state.from ? this.state.to : this.state.from;
    const inputTo = currencyBase === this.state.from ? 'toValue' : 'fromValue';
    const inputFrom = currencyBase === this.state.from ? 'fromValue' : 'toValue';

    const exhangeValue = parseFloat(value) * this.props[currencyBase][currencyTo];

    this.setState({
      [inputFrom]: parseFloat(value),
      [inputTo]: exhangeValue.toFixed(2)
    });

  }

  handleCurrencyFromChange = (e) => {
    const toV = this.state.to;
    const oldFrom = this.state.from;
    const updatedFrom = e.target.value;

    if (toV === updatedFrom) {
      this.setState({
        to: oldFrom,
        from: updatedFrom,
        fromValue: '',
        toValue: '',
      });
    }
    else {
      this.setState({
        [e.target.name]: e.target.value,
        fromValue: '',
        toValue: '',
      });
    }
    this.props.getExchangeRate(updatedFrom);
  }

  handleCurrencyToChange = (e) => {
    const toV = this.state.to;
    const fromV = this.state.from;
    const updatedTo = e.target.value;
    if (fromV === updatedTo ) {
      this.setState({
        from: toV,
        to: updatedTo,
        fromValue: '',
        toValue: '',
      })
    }
    else {
      this.setState({
        [e.target.name]: e.target.value,
        fromValue: '',
        toValue: '',
      });
    }
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
          {this.props[this.state.from] && this.props[this.state.from][this.state.to].toFixed(4) }
        </p>
        
        <div>
          <select name='from' value={this.state.from} onChange={this.handleCurrencyFromChange}>
            { currencies.map(currency => 
              <option value={currency.symbol} key={currency.symbol}>
                { currency.symbol }
              </option>)
            }
          </select>
          <input type="number" step="0.01" value={this.state.fromValue} name={this.state.from} onChange={this.handleExchangeRate} />
        </div>
        <div>
          <select name='to' value={this.state.to} onChange={this.handleCurrencyToChange}>
            {currencies.map(currency =>
              <option value={currency.symbol} key={currency.symbol}>
                {currency.symbol}
              </option>)
            }
          </select>
          <input type="number" step="0.01" value={this.state.toValue} name={this.state.to} onChange={this.handleExchangeRate} /> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({exchangeRate}) => ({
  ...exchangeRate
});

const mapDispatchToProps = dispatch => ({
  getExchangeRate: (base) => dispatch(getExchangeRate(base))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
