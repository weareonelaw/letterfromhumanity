import React from 'react';

import Logo from '../Logo/Logo';

import styles from './SplashScreen.module.sass';

const SplashScreen = () => (
  <div className={styles['splash-screen']}>
    {/* <img className={styles['logo']} src="/static/onelaw-logo.svg" /> */}
    <div className={styles['logo']}>
      <Logo />
    </div>
  </div>
);

export default SplashScreen;
