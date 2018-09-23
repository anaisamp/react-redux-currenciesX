import currencies from '../../constants/currencies';

const ExchangeRate = ({ to, from, rates }) => {
  const fromCurrency = currencies.find(c => c.symbol === from).currency;
  const toCurrency = currencies.find(c => c.symbol === to).currency;
  const exchangeRate = (rates[from] && rates[from][to].toFixed(4)) || '...';

  return `${fromCurrency} 1 = ${toCurrency} ${exchangeRate}`;
};

export default ExchangeRate;
