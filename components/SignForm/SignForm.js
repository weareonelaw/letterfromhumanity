import React from 'react';
import Form from './Form'
import ThanksContainer from './ThanksContainer';
import submitForm from './submitForm';
import Alert from '../Alert'
import styles from "./SignForm.module.sass";

export const SignForm = ({ submitSucceeded, submitFailed, handleSubmit, change, error = 'Oh no! Something went wrong. Please check all fields and try again.' }) => {
  if(submitSucceeded) return (
    <ThanksContainer />
  )
  else return (
    <div className={styles["form-wrapper"]}>
      <h1>Sign the letter</h1>
      <Form onSubmit={submitForm} handleSubmit={handleSubmit} change={change} />
      <Alert
        show={submitFailed}
        message={error}
      />
    </div>
  );
}

export default SignForm;
