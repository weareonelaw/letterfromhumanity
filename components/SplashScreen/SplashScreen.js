import React from 'react';

import Logo from '../Logo/Logo';

import styles from './SplashScreen.module.sass';

const SplashScreen = () => (
  <div className={styles['splash-screen']}>
    <div className={styles['logo']}>
      <Logo />
    </div>
  </div>
);

export default SplashScreen;
