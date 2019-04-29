import React from 'react';

import styles from './HashtagIntro.module.sass';

const HashtagIntro = () => (
  <div className={styles['hashtag-intro']}>
    <h1 className={styles['title']}>#letterfromhumanity</h1>
    <p className={styles['desc']}>
      Be part of a World Record, and sign the letter that binds humanity together as one
    </p>
  </div>
);

export default HashtagIntro;
