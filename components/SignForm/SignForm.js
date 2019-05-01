import React from 'react';
import Form from './Form'
import ThanksContainer from './ThanksContainer';
import submitForm from './submitForm';
import Alert from '../Alert'
import styles from "./SignForm.module.sass";

export const SignForm = ({ submitSucceeded, submitFailed, handleSubmit }) => {
  if(submitSucceeded) return (
    <ThanksContainer />
  )
  else return (
    <div className={styles["form-wrapper"]}>
      <Form onSubmit={submitForm} handleSubmit={handleSubmit} />
      <Alert
        show={submitFailed}
        message="Oh no! Something went wrong. Please check all fields and try again."
      />
    </div>
  );
}

export default SignForm;
