import { updateRates } from '../getExchangeRate';
import { UPDATE_FX_RATES } from '../../constants/types';

describe('actions', () => {
  it('should create an action to update fx rates', () => {
    const payload = { GBP: 0.98, USD: 1.17 };
    const base = 'EUR';
    const expectedAction = {
      type: UPDATE_FX_RATES,
      base,
      payload,
    };
    expect(updateRates(base, payload)).toEqual(expectedAction);
  });
});
