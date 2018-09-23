import { combineReducers } from 'redux';
import exchangeRate from './exchangeRate';
import balanceUpdate from './updateBalance';

export default combineReducers({
  exchangeRate,
  balanceUpdate,
});
