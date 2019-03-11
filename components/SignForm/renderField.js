import React from 'react'
import styles from './Form.module.sass';

export const renderField = (
  { input, label, placeholder, type, id, className, meta: { touched, error } },
) => (
  <div className={styles['input-row']}>
    {label && <label className={styles['label']}>{label}</label> }
    <input {...input} id={id} type={type} placeholder={placeholder} className={`${className} ${touched && error ? styles['input--has-error'] : ''} ${!error && touched ? styles['input--has-success'] : ''}`} />
    {touched && error && <span className={`${styles['help-text']} ${styles['help-text--has-error']}`}>{error}</span>}
  </div>
);

