import '../sass/application.scss';
import React from 'react';
import { Provider } from 'react-redux';
import SignFormContainer from '../components/Form/SignFormContainer';
import configureStore from '../store';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <SignFormContainer />
  </Provider>
);