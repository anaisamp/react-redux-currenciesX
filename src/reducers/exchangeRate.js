import { UPDATE_FX_RATES } from '../constants/types';

export default (state = {}, action) => {
  const { type, base, payload } = action;
  switch (type) {
    case UPDATE_FX_RATES:
      return {
        ...state,
        [base]: payload,
      }
    default:
      return state
  }
}