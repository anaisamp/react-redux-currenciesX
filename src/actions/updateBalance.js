import { UPDATE_BALANCE } from '../constants';

export const updateBalance = (fromValue, fromCurrency, toValue, toCurrency) => {
  return {
    type: UPDATE_BALANCE,
    payload: { fromValue, fromCurrency, toValue, toCurrency }
  }
};