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
      <form onSubmit={this.props.handleSubmit(this.props.onSubmit)} className={styles['signup-form']}>
        <Input label="First name" required onChange={(value) => this.setState({ firstName: value })} />
        <Input label="Last name" onChange={(value) => this.setState({ lastName: value })} />
        <Input label="Email" required onChange={(value) => this.setState({ email: value })} />
        <Input label="Where are you located?" onChange={(value) => this.setState({ country: value })} />

        <Button type="submit" block>Add your signature to the letter</Button>
      </form>
    );
  }
}

export default Form;