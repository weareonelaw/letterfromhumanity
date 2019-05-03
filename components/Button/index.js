import React from 'react';
import styles from './Button.module.sass';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const Button = ({ type, children, block, className, secondary, onClick, href, target }) => {
  let buttonClassNames = cx({
    [`${styles.btn}`]: true,
    [`${styles['btn--block']}`]: block,
    [`${styles['secondary']}`]: secondary,
    [className]: true
  });

  if (href) {
    return <a href={href} target={target} className={buttonClassNames} onClick={onClick}>{children}</a>
  }

  return (
    <button type={type} className={buttonClassNames} onClick={onClick}>{children}</button>
  )
}

export default Button;
