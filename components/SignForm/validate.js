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
  if (!values.agree) {
    errors.agree = 'You need to check the box to sign the letter :-)'
  } 

  return errors
}

export default validate;
