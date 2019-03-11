import React from 'react';
import styles from './Page.module.sass';

const Page = ({ children }) => (
  <div className={styles['page']}>
    {children}
  </div>
);

export default Page;