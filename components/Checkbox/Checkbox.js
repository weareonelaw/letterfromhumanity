import React from 'react';
import s from './Checkbox.module.sass';

const Checkbox = ({
  input,
  label,
  type,
  id,
  meta: { touched, error, warning }
}) => (
  <div className={s['wrapper']}>
    <input {...input} placeholder={label} type={type} id={id} />
    <label htmlFor={id}> {label}</label>
    {touched &&
      ((error && <div className={`${s['form-helper']} ${s['form-helper--has-error']}`}>{error}</div>) ||
        (warning && <div className={s['form-helper']}>{warning}</div>))}
  </div>
)
export default Checkbox;
