import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";

import App from './containers/App';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
