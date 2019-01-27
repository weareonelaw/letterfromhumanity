import React from 'react';
import { Field } from 'redux-form';

const Form = ({ handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Field
      name="firstName"
      component="input"
    />
    <Field
      name="lastName"
      component="input"
      />
    <Field
      name="email"
      component="input"
      />
    <Field
      name="country"
      component="input"
      />
    <button type="submit">Submit</button>
  </form>
);

export default Form;