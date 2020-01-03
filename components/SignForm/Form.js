import React from 'react';
import { Field } from 'redux-form';
import Checkbox from '../Checkbox/Checkbox';
import styles from './Form.module.sass';
import Button from '../Button';
import Input from '../Input/Input.js';

class Form extends React.Component {
  render() {
    return (
      <div className={styles['signup-form']}>
        <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
          <Field
            name="firstname"
            component={Input}
            className={styles['field']}
            placeholder="First name"
            required
          />
          <Field
            name="lastname"
            component={Input}
            className={styles['field']}
            placeholder="Last name"
          />
          <Field
            name="email"
            component={Input}
            className={styles['field']}
            placeholder="Email"
            type="email"
            required
          />
           <Field
            name="location"
            component={Input}
            className={styles['field']}
            placeholder="Where are you located?"
          />

          <p className={styles['desc']}>
            When the signature is sent to the recipient, only your first and last name are visible.
            We use your email address at the collection of names to be sure that each signature is unique.
            Read more about how we handle your <a href="/terms" target="_blank" className={styles['link']}>personal information</a>.
          </p>

          <Field
            name="agree"
            id="agree"
            component={Checkbox}
            type="checkbox"
            label="I understand and want to sign the letter"
          />

          <Button className={styles['submit']} type="submit" block>Sign</Button>
        </form>
      </div>
    );
  }
}

export default Form;
