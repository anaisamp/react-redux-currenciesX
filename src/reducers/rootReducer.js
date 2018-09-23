import { combineReducers } from 'redux';
import exchangeRate from './exchangeRate';
import updateBalance from './updateBalance';

export default combineReducers({
  exchangeRate,
  updateBalance,
});