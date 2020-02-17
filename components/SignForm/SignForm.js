import React from 'react';
import Form from './Form'
import submitForm from './submitForm';
import Alert from '../Alert'
import styles from "./SignForm.module.sass";
import { useRouter } from 'next/router'

export const SignForm = ({ submitSucceeded = true, submitFailed, handleSubmit, change, error = 'Oh no! Something went wrong. Please check all fields and try again.' }) => {
  const router = useRouter()
  if(submitSucceeded) {
    if(typeof window !== 'undefined') {
      router.push('/thanks')
    }
  }
  return (
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
