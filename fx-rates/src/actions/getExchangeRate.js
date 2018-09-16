import axios from 'axios';

export const getExchangeRate = () => dispatch => {
  const accessKey = '92c4d2b294b883ccd58f4402b284b1cc';
  const url = `http://data.fixer.io/api/latest?access_key=${accessKey}&base=EUR&symbols=USD,EUR,GBP`;
  return axios.get(url)
    .then(response => dispatch(updateRates(response.data.rates)))
  }

export const updateRates = (payload) => dispatch =>  {
  console.log(payload);
  dispatch({
    type: 'UPDATE_RATES',
    payload,
  })
}