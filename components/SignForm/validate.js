const validate = values => {
  const errors = {}

  if (!values.firstname) {
    errors.firstname = 'Required field'
  }
  if (!values.lastname) {
    errors.lastname = 'Required field'
  }
  if (!values.email) {
    errors.email = 'Required field'
  }
  if (!values.agree) {
    errors.agree = 'You need to check the box to sign the letter'
  }   

  return errors
}

export default validate;
