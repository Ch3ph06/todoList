import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import todoApp from './reducers';
import App from './components/app.jsx';

let store = createStore(todoApp, applyMiddleware(logger()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(`root`)
);
