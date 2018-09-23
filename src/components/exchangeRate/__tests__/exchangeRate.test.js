import React from 'react';
import { shallow } from 'enzyme';
import '../../../config/enzyme-setup';
import ExchangeRate from '../ExchangeRate';

it('renders ExchangeRate', () => {
  const props = {
    to: 'GBP',
    from: 'USD',
    rates: { USD: { GBP: 1.46754, EUR: 1.20976 } },
  };
  const wrapper = shallow(<ExchangeRate {...props} />);
  expect(wrapper).toMatchSnapshot();
});
