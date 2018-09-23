import React from 'react';
import { shallow } from 'enzyme';
import '../../../config/enzyme-setup';
import ConvertForm from '../ConvertForm';

it('renders ConvertForm', () => {
  const props = {
    selectName: 'from',
    selectedCurrency: 'USD',
    inputValue: '11',
    handleCurrencyChange: jest.fn(),
    handleExchangeRate: jest.fn(),
    balance: '30.00',
  };
  const wrapper = shallow(<ConvertForm {...props} />);
  expect(wrapper).toMatchSnapshot();
});
