import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'purple',
    },
  },
  cssFocused: {}
});

function InputClass({ classes, placeholder, name, required, onChange, input }) {
  return (
    <FormControl fullWidth required={required} margin="dense" >
      <InputLabel
        htmlFor={`custom-css-standard-input-${name}`}
      >
        {placeholder}
      </InputLabel>
      <Input
        id={`custom-css-standard-input-${name}`}
        fullWidth
        onChange={(event) => input.onChange && input.onChange(event.currentTarget.value)}
        name={input.name}
        value={input.value}
      />
    </FormControl>
  );
}

InputClass.props = {
  onChange: PropTypes.func,
};

export default withStyles(styles)(InputClass);

function input(props) {
  console.log(props)
  return <input {...props} />
}
