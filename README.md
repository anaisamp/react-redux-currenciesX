# Exchange Currencies

This is a react with redux application to exchange currencies between GBP, EUR and USD.

FX rates are provided by [Exchange Rates API](https://exchangeratesapi.io/).

This app was created using [`create-react-app`](https://github.com/facebook/create-react-app).

Tests were implemented using Jest and Enzyme.

A screenshot of the application is available at "visuals" folder.

## How to run the app

1. Clone repository

`git clone https://github.com/anaisamp/react-redux-currenciesX.git`

2. Install its dependencies

`yarn`

3. Start development server

`npm run start`

4. Run tests

`npm run test`

## Features

- Get updated rates every 10 minutes.
- Exchange amount between supported currencies, while updating the user's current balance.
- Accessibility was taken into account.

## Next steps

- Improve test coverage.
- Highlight balance when it updates.
- Highlight balance when the user doesn't have sufficient funds.
- Use redux to manage the whole application state.