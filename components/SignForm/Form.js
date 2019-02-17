import React from 'react';
import { Field } from 'redux-form';
import { renderField } from './renderField';
import './Form.module.sass';

const Form = ({ handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
    <Field
      name="firstName"
      placeholder="First name"
      className="input"
      component={renderField}

    />
    <Field
      name="lastName"
      placeholder="Last name"
      className="input"
      component={renderField}
      />
    <Field
      name="email"
      placeholder="Email"
      className="input"
      component={renderField}
      />
    <Field
      name="country"
      placeholder="Where are you located?"
      className="input"
      component={renderField}
      />
    <button type="submit">Submit</button>
  </form>
);

export default Form;