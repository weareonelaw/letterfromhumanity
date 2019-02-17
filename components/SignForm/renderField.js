import React from 'react'

export const renderField = (
  { input, label, placeholder, type, id, className, meta: { touched, error } },
) => (
  <div className="input-row">
    {label && <label className="label">{label}</label> }
    <input {...input} id={id} type={type} placeholder={placeholder} className={`${className} ${touched && error ? 'input--has-error' : ''} ${!error && touched ? 'input--has-success' : ''}`} />
    {touched && error && <span className="help-text help-text--has-error">{error}</span>}
  </div>
);