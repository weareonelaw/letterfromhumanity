import React from 'react';
import Form from './Form'
import { reduxForm } from 'redux-form';

export const SignFormContainer = ({ handleSubmit }) => {
  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  }

  return (
    <Form
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />
  );
}

export default reduxForm({
  form: 'signs' // a unique identifier for this form
})(SignFormContainer)