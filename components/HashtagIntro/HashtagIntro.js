import React from 'react';

import styles from './HashtagIntro.module.sass';

const HashtagIntro = () => (
  <div className={styles['hashtag-intro']}>
    <h1 className={styles['title']}>#letterfromhumanity</h1>
    <p className={styles['desc']}>
      Be a part of a World Record and sign the letter that binds humanity together as one
    </p>
    <a href="#about" className={styles['scroll-down']}>
      Scroll down to explore
      <div className={styles['chevron']}></div>
    </a>
  </div>
);

export default HashtagIntro;
