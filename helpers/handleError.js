import { SubmissionError } from 'redux-form';
import { errorCodes } from './errorCodes';

const handleError = (err) => {
  let errors = {
    ['_error']: 'Oh no! Something went wrong. Please check all fields and try again!'
  }

  try {
    if(typeof err.response.data.fields !== "undefined") {
      for (const key in err.response.data.fields) {
        let selectedObject = errorCodes.find(obj => obj.serverErrorField === key );
        errors[selectedObject.errorField] = selectedObject.errorMessage;
      }
    }
  }
  catch {
    errors['_error'] = 'Oh no! An server error occurred! Please try again!'
  }

  throw new SubmissionError(errors);
}

export default handleError;
