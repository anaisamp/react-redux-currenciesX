import { updateBalance } from '../updateBalance';
import { UPDATE_BALANCE } from '../../constants/types';

describe('actions', () => {
  it('should create an action to update balance', () => {
    const payload = {
      fromValue: 1.00, fromCurrency: 'GBP', toValue: 1.12, toCurrency: 'EUR',
    };
    const expectedAction = {
      type: UPDATE_BALANCE,
      payload,
    };
    expect(updateBalance(payload)).toEqual(expectedAction);
  });
});
