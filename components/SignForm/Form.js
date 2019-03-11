import React from 'react';
import { Field } from 'redux-form';
import { renderField } from './renderField';
import styles from './Form.module.sass';
import Button from '../Button';

const Form = ({ handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)} className={styles['signup-form']}>
    <Field
      name="firstName"
      placeholder="First name"
      className={styles['input']}
      component={renderField}
    />
    <Field
      name="lastName"
      placeholder="Last name"
      className={styles['input']}
      component={renderField}
      />
    <Field
      name="email"
      placeholder="Email"
      className={styles['input']}
      component={renderField}
      />
    <Field
      name="country"
      placeholder="Where are you located?"
      className={styles['input']}
      component={renderField}
      />
    <Button type="submit">Submit</Button>
  </form>
);

export default Form;