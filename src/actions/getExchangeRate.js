import axios from 'axios';
import currencies from '../constants/currencies';
import baseAPIUrl from '../constants/endpoint';
import { UPDATE_FX_RATES } from '../constants/types';

export const updateRates = (base, payload) => ({
  type: UPDATE_FX_RATES,
  base,
  payload,
});

export const getExchangeRate = base => (dispatch) => {
  const excludeBase = currencies
    .reduce((acc, c) => (c.symbol !== base
      ? acc.concat(c.symbol)
      : acc), []).join(',');

  const url = `${baseAPIUrl}&base=${base}&symbols=${excludeBase}`;

  return axios.get(url)
    .then(response => dispatch(updateRates(base, response.data.rates)));
};
