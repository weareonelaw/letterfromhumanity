import React from 'react';
import Form from './Form'
import { reduxForm } from 'redux-form';
import firestore from "../../firebase.config";

export const SignFormContainer = ({ handleSubmit }) => {
  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
    const db = firestore.firestore();
    const signsRef = db.collection('signs').add({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      country: formValues.country
    }); 
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