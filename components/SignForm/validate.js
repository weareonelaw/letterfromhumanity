const validate = values => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = 'Required field'
  }
  if (!values.lastName) {
    errors.lastName = 'Required field'
  }
  if (!values.email) {
    errors.email = 'Required field'
  }

  return errors
}

export default validate;
