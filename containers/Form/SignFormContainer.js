import React from 'react';
import { reduxForm } from 'redux-form';
import validate from '../../components/SignForm/validate'
import SignForm from '../../components/SignForm/SignForm';

export const SignFormContainer = (props) => (
  <SignForm {...props} />
)

export default reduxForm({
  form: 'signs',
  validate: validate
})(SignFormContainer)