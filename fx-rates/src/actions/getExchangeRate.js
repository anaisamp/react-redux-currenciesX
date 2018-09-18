import axios from 'axios';
import currencies from '../constants';

export const getExchangeRate = (base) => dispatch => {
  const excludeBase = currencies
    .reduce((acc, c) => {
      return c.symbol !== base
        ? acc.concat(c.symbol)
        : acc;
    }, []).join(',');

  const url = `https://api.exchangeratesapi.io/latest?&base=${base}&symbols=${excludeBase}`;
  return axios.get(url)
    .then(response => dispatch(updateRates(base, response.data.rates)))
  }

export const updateRates = (base, payload) => dispatch =>  {
  console.log(payload);
  dispatch({
    type: 'UPDATE_RATES',
    base,
    payload,
  })
}