import axios from 'axios';

import handleError from '../../helpers/handleError';

// TODO: Handle when no connection to internet is present.
const submitForm = async (values) => {
  return axios.post(process.env.BACKEND_URL + '/signatures/', {
    ...values
  }).then(
    location.hash = '#sign'
  )
  .catch((err) => handleError(err));
};

export default submitForm;
