
import exchangeRate from '../exchangeRate';
import { UPDATE_FX_RATES } from '../../constants/types';

describe('exchangeRate reducer', () => {
  it('should return the initial state', () => {
    expect(exchangeRate(undefined, {})).toEqual({});
  });

  it('should handle UPDATE_FX_RATES', () => {
    const payload = {
      EUR: '1.12',
      USD: '1.22',
    };
    const base = 'GBP';
    const action = {
      type: UPDATE_FX_RATES,
      base,
      payload,
    };
    const nextState = {
      GBP: {
        EUR: '1.12',
        USD: '1.22',
      },
    };
    expect(exchangeRate({}, action)).toEqual(nextState);
  });
});
