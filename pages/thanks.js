import React from 'react';
import ToggleButton from '../components/Menu/ToggleButton';
import MainMenu from '../components/Menu/MainMenu';
import Header from '../components/Header/Header';
import Page from '../components/Page/Page';
import ThanksContainer from '../components/SignForm/ThanksContainer';

const About = () => (
  <>
    <ToggleButton />
    <MainMenu />
    <Header />
    <Page>
      <ThanksContainer />
    </Page>
  </>
);

export default About;
