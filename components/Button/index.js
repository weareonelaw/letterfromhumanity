import React from 'react';
import styles from './Button.module.sass';

const Button = ({ type, children }) => {
  return (
    <button type={type} className={styles['btn']}>{children}</button>
  )
}

export default Button;