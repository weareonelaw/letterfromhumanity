import React from 'react';
import Form from './Form'
import Thanks from './Thanks';
import submitForm from './submitForm';
import Alert from '../Alert'

export const SignForm = ({ submitSucceeded, submitFailed, handleSubmit }) => {
  if(submitSucceeded) return (
    <Thanks />
  )
  else return ( 
    <>
      <Form
        onSubmit={submitForm}
        handleSubmit={handleSubmit}
      />
      <Alert show={submitFailed} message="fail" />
    </>
  );
}

export default SignForm;
