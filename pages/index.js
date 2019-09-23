import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import styles from './Index.module.sass';
import { SignFormContainer } from '../containers/Form';
import Header from '../components/Header/Header';
import ToggleButton from '../components/Menu/ToggleButton';
import MainMenu from '../components/Menu/MainMenu';
import SplashScreen from '../components/SplashScreen/SplashScreen';
import HashtagIntro from '../components/HashtagIntro/HashtagIntro';
import Contact from '../components/Contact/Contact';
import Letter from '../components/Letter/Letter';
import Countdown from '../components/Countdown/Countdown';
import Page from '../components/Page/Page';
import { EVENT_DATE } from '../utils/constants';

configureAnchors({offset: -60})

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSplashScreen: true,
      showCountdown: new Date() < new Date(EVENT_DATE),
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({
        showSplashScreen: false,
      });
    }, 2000); // Needs to align with css animation for SplashScreen
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    return (
      <div className={styles['layout']}>
        <ToggleButton />
        <MainMenu />
        <Header />

        {this.state.showSplashScreen && <SplashScreen />}

        <ScrollableAnchor id="intro">
          <div>
            <Page>
              {this.state.showCountdown ?
                <Countdown
                  date={EVENT_DATE}
                  onComplete={() => setTimeout(() => {
                    this.setState({showCountdown: false});
                  }, 1000)}
                />
                :
                <HashtagIntro />
              }
            </Page>
          </div>
        </ScrollableAnchor>

        <ScrollableAnchor id="about">
          <div className={styles['page-wrap--grey']}>
            <Page>
              <Letter showProgress={!this.state.showCountdown} />
            </Page>
          </div>
        </ScrollableAnchor>

        {!this.state.showCountdown && <ScrollableAnchor id="sign">
          <div>
            <Page>
              <SignFormContainer />
            </Page>
          </div>
        </ScrollableAnchor>}

        <ScrollableAnchor id="contact">
          <div className={styles['page-wrap--grey']}>
            <Page>
              <Contact />
            </Page>
          </div>
        </ScrollableAnchor>
      </div>
    )
  }
}

export default Index;
