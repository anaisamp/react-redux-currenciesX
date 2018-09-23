import React from 'react';
import { shallow } from 'enzyme';
import './config/enzyme-setup';
import { App } from './App';

it('renders App', () => {
  const props = {
    getExchangeRate: jest.fn(),
    updateBalance: jest.fn(),
    balance: { GBP: '400.30', EUR: '150.00', USD: '21.02' },
  };
  const wrapper = shallow(<App {...props} />);
  expect(wrapper).toMatchSnapshot();
});
