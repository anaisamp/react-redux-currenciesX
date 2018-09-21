import React, { Fragment } from 'react';
import currencies from '../../constants';

const ExchangeRate = ({to, from, exchangeRates}) => (
  <Fragment>
    {currencies.find(c => c.symbol === from).currency} 
    1 
    = {currencies.find(c => c.symbol === to).currency} 
    {exchangeRates[from] && exchangeRates[from][to].toFixed(4)}
  </Fragment>
);

export default ExchangeRate;