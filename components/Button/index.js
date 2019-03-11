import React from 'react';
import styles from './Button.module.sass';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const Button = ({ type, children, block }) => {
  let className = cx({
    [`${styles.btn}`]: true,
    [`${styles['btn--block']}`]: block
  });
  return (
    <button type={type} className={className}>{children}</button>
  )
}

export default Button;