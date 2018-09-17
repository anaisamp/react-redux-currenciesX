import axios from 'axios';

export const getExchangeRate = (base) => dispatch => {
  const url = `https://api.exchangeratesapi.io/latest?&base=${base}&symbols=USD,EUR,GBP`;
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