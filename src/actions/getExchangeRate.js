import axios from 'axios';
import { currencies, baseAPIUrl, UPDATE_FX_RATES } from '../constants';

export const getExchangeRate = (base) => dispatch => {
  const excludeBase = currencies
    .reduce((acc, c) => {
      return c.symbol !== base
        ? acc.concat(c.symbol)
        : acc;
    }, []).join(',');

  const url = `${baseAPIUrl}&base=${base}&symbols=${excludeBase}`;

  return axios.get(url)
    .then(response => dispatch(updateRates(base, response.data.rates)))
  }

export const updateRates = (base, payload) => dispatch =>  {
  dispatch({
    type: UPDATE_FX_RATES,
    base,
    payload,
  })
}