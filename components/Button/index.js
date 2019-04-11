import React from 'react';
import styles from './Button.module.sass';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const Button = ({ type, children, block, className }) => {
  let buttonClassNames = cx({
    [`${styles.btn}`]: true,
    [`${styles['btn--block']}`]: block,
    [className]: true
  });

  return (
    <button type={type} className={buttonClassNames}>{children}</button>
  )
}

export default Button;
