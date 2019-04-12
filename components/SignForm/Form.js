import React from 'react';
import { Field } from 'redux-form';
import { renderField } from './renderField';
import styles from './Form.module.sass';
import Button from '../Button';
import Input from '../Input/Input.js';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
    }
  }

  render() {
    return (
      <div className={styles['signup-form']}>
        <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
          <Input label="First name" required onChange={(value) => this.setState({ firstName: value })} />
          <Input label="Last name" onChange={(value) => this.setState({ lastName: value })} />
          <Input label="Email" required onChange={(value) => this.setState({ email: value })} />
          <Input label="Where are you located?" onChange={(value) => this.setState({ country: value })} />

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
