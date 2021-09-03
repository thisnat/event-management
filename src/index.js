import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import store from './store'
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './style/style.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
