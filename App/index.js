import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './config/Navigation';
import configureStore from './store/configureStore';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);