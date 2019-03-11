import React, { Component } from 'react';
import { SignFormContainer } from '../containers/Form'
import ToggleButton from '../components/Menu/ToggleButton';
import MainMenu from '../components/Menu/MainMenu';
import SplashScreen from '../components/SplashScreen/SplashScreen';
import Letter from '../components/Letter/Letter';
import Page from '../components/Page/Page';

class Index extends Component {
  render() {
    return (
      <>
        <MainMenu />
        <ToggleButton />
        <Page>
          <SplashScreen />
        </Page>
        <Page>
          <Letter />
        </Page>
        <Page>
          <SignFormContainer />
        </Page>
      </>   
    )
  }
}

export default Index;
