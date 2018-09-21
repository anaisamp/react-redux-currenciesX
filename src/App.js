import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getExchangeRate } from './actions/getExchangeRate';
import ExchangeRate from './components/exchangeRate';
import ConvertForm from './components/convertForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      from: 'GBP',
      to: 'EUR',
      toValue: '',
      fromValue: '',
    }
  }

  initExchangeRates = () => {
    this.props.getExchangeRate(this.state.from);
    this.props.getExchangeRate(this.state.to);
  }
  componentDidMount() {
    this.initExchangeRates();
    //this.interval = setInterval(() => this.props.getExchangeRate(this.state.from), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState;
  }

  handleExchangeRate = (e, inputFrom, inputTo) => {
    const value = e.target.value;
    const currencyBase = e.target.name;
    const currencyTo = currencyBase === this.state.from ? this.state.to : this.state.from;
    const exhangeValue = parseFloat(value) * this.props[currencyBase][currencyTo];
    this.setState({
      [inputFrom]: parseFloat(value),
      [inputTo]: exhangeValue === 0 ? exhangeValue : exhangeValue.toFixed(2)
    });
  }

  handleCurrencyChange = (e, selectElement) => {
    const oldCurrencyFrom = this.state.from;
    const oldCurrencyTo = this.state.to;
    const updatedCurrency = e.target.value;
    const oppsitySelectElement = selectElement === 'from' ? oldCurrencyTo : oldCurrencyFrom;

    if (oppsitySelectElement === updatedCurrency) {
      this.setState({
        from: selectElement === 'from' ? updatedCurrency : oldCurrencyTo,
        to: selectElement === 'from' ? oldCurrencyFrom : updatedCurrency,
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
    if (!this.props[updatedCurrency]){ 
      this.props.getExchangeRate(updatedCurrency);
    }
  };

  render() {
    const { from, fromValue, to, toValue } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Exchange</h1>
        </header>
        <p className="App-rates">
          <ExchangeRate from={from} to={to} exchangeRates={this.props} />
        </p>
        
        <div className="App-convert">
          <ConvertForm
            selectName='from'
            selectedCurrency={from}
            inputValue={fromValue}
            handleCurrencyChange={(e) => this.handleCurrencyChange(e, 'from')}
            handleExchangeRate={(e) => this.handleExchangeRate(e, 'fromValue', 'toValue')}
            />
          <ConvertForm
            selectName='to'
            selectedCurrency={to}
            inputValue={toValue}
            handleCurrencyChange={(e) => this.handleCurrencyChange(e, 'to')}
            handleExchangeRate={(e) => this.handleExchangeRate(e, 'toValue', 'fromValue')}
          />
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
