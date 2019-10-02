import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  notchedOutline: {
    borderWidth: '2px',
    borderColor: 'white !important',
    borderRadius: 0
  },
});

function InputClass({ className, classes, placeholder, name, required, onChange, input, type, label, meta: { touched, invalid, error, warning }, ...custom }) {

  return (
    <div className={className}>
      <TextField
        fullWidth
        label={placeholder}
        error={touched && invalid}
        helperText={touched && error}
        className={classes.root}
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
          }
        }}
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
