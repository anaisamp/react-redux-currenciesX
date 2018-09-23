import { UPDATE_BALANCE } from '../constants/types';

const initialState = {
  GBP: 20.00,
  EUR: 0.00,
  USD: 0.00,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case UPDATE_BALANCE:
      const { fromCurrency, toCurrency, toValue, fromValue } = action.payload;
      const fromBalance = parseFloat(state[fromCurrency]) - parseFloat(fromValue);
      const toBalance = parseFloat(state[toCurrency]) + parseFloat(toValue)
      return {
        ...state,
        [fromCurrency]: fromBalance.toFixed(2),
        [toCurrency]: toBalance.toFixed(2),

      }
    default:
      return state
  }
}