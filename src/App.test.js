import React from 'react';
import { shallow, mount } from 'enzyme';
import './config/enzyme-setup';
import { App } from './App';

const props = {
  getExchangeRate: jest.fn(),
  updateBalance: jest.fn(),
  balance: { GBP: '400.30', EUR: '150.00', USD: '21.02' },
  rates: { GBP: { EUR: 1.12, USD: 1.17 }, EUR: { GBP: 0.89, USD: 0.98 } },
};

it('renders App', () => {
  const wrapper = shallow(<App {...props} />);
  expect(wrapper).toMatchSnapshot();
});

it('updates input value "to" when input value "from" has changed', () => {
  const wrapper = mount(<App {...props} />);
  const currency = 'GBP';
  wrapper.find('input').first().simulate('change', { target: { value: '1', name: currency } });
  wrapper.update();
  expect(wrapper.find('input').last().prop('value')).toBe('1.12');
});

it('updates input value "from" when input value "to" has changed', () => {
  const wrapper = mount(<App {...props} />);
  const currency = 'EUR';
  wrapper.find('input').last().simulate('change', { target: { value: '1', name: currency } });
  wrapper.update();
  expect(wrapper.find('input').first().prop('value')).toBe('0.89');
});
