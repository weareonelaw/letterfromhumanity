import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';


import styles from './Index.module.sass';
import { SignFormContainer } from '../containers/Form';
import Header from '../components/Header/Header';
import ToggleButton from '../components/Menu/ToggleButton';
import MainMenu from '../components/Menu/MainMenu';
import SplashScreen from '../components/SplashScreen/SplashScreen';
import Letter from '../components/Letter/Letter';
import Page from '../components/Page/Page';

class Index extends Component {
  render() {
    return (
      <div className={styles['layout']}>
        <ToggleButton />
        <MainMenu />
        <Header>
          Hej<br />då
          Hej<br />då
        </Header>
        <ScrollableAnchor id="top">
          <div>
            <Page>
              <SplashScreen />
            </Page>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="about">
          <div>
            <Page>
              <Letter />
            </Page>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="sign">
          <div>
            <Page>
              <SignFormContainer />
            </Page>
          </div>
        </ScrollableAnchor>
      </div>
    )
  }
}

export default Index;
