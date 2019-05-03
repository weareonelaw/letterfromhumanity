import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 20,
  }
});

function InputClass({ classes, placeholder, name, required, onChange, input, type, label, meta: { touched, invalid, error, warning }, ...custom }) {

  return (
    <div>
      <TextField
        fullWidth
        label={placeholder}
        error={touched && invalid}
        helperText={touched && error}
        className={classes.root}
        variant="outlined"  
        {...input}
        {...custom}
      />
    </div>
  );
}

InputClass.props = {
  onChange: PropTypes.func,
};

export default withStyles(styles)(InputClass);
