import axios from 'axios';
import { SubmissionError } from 'redux-form';

const submitForm = async (values) => {
  try {
    await axios.post(process.env.BACKEND_URL + '/signatures/', {
      ...values
    });
  } catch (err) {
    // TODO: Handle when no connection to internet is present.
    throw new SubmissionError({ _error: err.response })
  }
};

export default submitForm;
