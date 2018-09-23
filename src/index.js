import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import './index.css';
import ConnectedApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={configureStore()}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
