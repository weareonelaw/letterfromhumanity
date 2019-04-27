import React from 'react';
import { Field } from 'redux-form';
import { renderField } from './renderField';
import styles from './Form.module.sass';
import Button from '../Button';
import Input from '../Input/Input.js';

function input(props) {
  console.log(props)
  return <input {...props} />
}

class Form extends React.Component {
  render() {
    return (
      <div className={styles['signup-form']}>
        <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
          <Field
            name="firstname"
            component={Input}
            placeholder="First name"
            required
          />
          <Field
            name="lastname"
            component={Input}
            placeholder="Last name"
          />
          <Field
            name="email"
            component={Input}
            placeholder="Email"
            required
          />
           <Field
            name="location"
            component={Input}
            placeholder="Where are you located?"
          />

          <p className={styles['desc']}>
            When the signature is sent to the recipient, only your first and last name are visible.
            We use your email address at the collection of names to be sure that each signature is unique.
            The email address will not be saved in any other way.
            Read more about how we handle your <a href="#">personal information</a>.
          </p>
          <Button className={styles['submit']} type="submit" block>Sign the letter</Button>
        </form>
      </div>
    );
  }
}

export default Form;
