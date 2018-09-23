import { UPDATE_BALANCE } from '../constants/types';

const initialState = {
  GBP: '20.00',
  EUR: '0.00',
  USD: '0.00',
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case UPDATE_BALANCE:
      const {
        from, to, toValue, fromValue,
      } = action.payload;
      const fromBalance = parseFloat(state[from]) - parseFloat(fromValue);
      const toBalance = parseFloat(state[to]) + parseFloat(toValue);

      return {
        ...state,
        [from]: fromBalance.toFixed(2).toString(),
        [to]: toBalance.toFixed(2).toString(),

      };
    default:
      return state;
  }
};
