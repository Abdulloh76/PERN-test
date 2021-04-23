import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store/store';
import { REACT_APP_API_URL } from './utils/constants'

console.log(REACT_APP_API_URL);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
