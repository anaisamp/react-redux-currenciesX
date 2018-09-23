
import updateBalance from '../updateBalance';
import { UPDATE_BALANCE } from '../../constants/types';

describe('updateBalance reducer', () => {
  const initialState = {
    GBP: '20.00',
    EUR: '0.00',
    USD: '0.00',
  };

  it('should return the initial state', () => {
    expect(updateBalance(undefined, {})).toEqual(initialState);
  });

  it('should handle UPDATE_BALANCE', () => {
    const payload = {
      from: 'GBP',
      to: 'EUR',
      toValue: '1.12',
      fromValue: '1',
    };
    const action = {
      type: UPDATE_BALANCE,
      payload,
    };
    const nextState = {
      GBP: '19.00',
      EUR: '1.12',
      USD: '0.00',
    };
    expect(updateBalance(initialState, action)).toEqual(nextState);
  });
});
