import { UPDATE_BALANCE } from '../constants/types';

export const updateBalance = payload => ({
  type: UPDATE_BALANCE,
  payload,
});
