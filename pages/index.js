import '../sass/application.scss';
import React from 'react';
import { Provider } from 'react-redux';
import SignFormContainer from '../components/Form/SignFormContainer';
import configureStore from '../store/configurateStore';
import ToggleButton from '../components/Menu/ToggleButton';
import MainMenu from '../components/Menu/MainMenu';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <MainMenu />
    <ToggleButton />
    <SignFormContainer />
  </Provider>
);