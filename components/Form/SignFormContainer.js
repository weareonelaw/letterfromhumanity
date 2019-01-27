import React from 'react';
import Form from './Form'
import { reduxForm } from 'redux-form';
import Thanks from './Thanks';

export const SignFormContainer = ({ handleSubmit, submitSucceeded }) => {
  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  }

  if(submitSucceeded) return (
    <Thanks />
  )
  else
    return (
      <Form
        onSubmit={submitForm}
        handleSubmit={handleSubmit}
        submitSucceeded={submitSucceeded}
      />
  );
}

export default reduxForm({
  form: 'signs' // a unique identifier for this form
})(SignFormContainer)