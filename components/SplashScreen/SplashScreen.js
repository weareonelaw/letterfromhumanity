import React from 'react';

import styles from './SplashScreen.module.sass';

const SplashScreen = () => (
  <div className={styles['splash-screen']}>
    <h1 className={styles['title']}>#letterfromhumanity</h1>
    <p className={styles['desc']}>
      Be part of a World Record, and sign the letter that binds humanity together as one
    </p>
  </div>
);

export default SplashScreen;
