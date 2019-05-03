import React from 'react';

import styles from './Contact.module.sass';

const Contact = () => (
  <div className={styles['contact']}>
    <h1 className={styles['title']}>Contact</h1>

    <h3 className={styles['sub-heading']}>For Press</h3>
    <p className={styles['desc']}>
      <a href="mailto:press@letterfromhumanity.org">press@letterfromhumanity.org</a>
      <br/>
      <a href="tel:+468123123">+46 8 123 123</a>
    </p>

    <h3 className={styles['sub-heading']}>General Questions</h3>
    <p className={styles['desc']}>
      <a href="mailto:info@letterfromhumanity.org">info@letterfromhumanity.org</a>
    </p>

    <h3 className={styles['sub-heading']}>Instagram</h3>
    <p className={styles['desc']}>
      <a href="https://www.instagram.com/weareonelaw">@weareonelaw</a>
      <br/>
      <a href="https://www.instagram.com/letterfromhumanity">@letterfromhumanity</a>
    </p>
  </div>
);

export default Contact;
