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

class InputClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueId: Math.round(Math.random() * 10000),
    }
  }
  render() {
    const { classes, label, required } = this.props;
    return (
      <FormControl fullWidth required={required} margin="dense" >
        <InputLabel
          htmlFor={`custom-css-standard-input-${this.state.uniqueId}`}
        >
          {label}
        </InputLabel>
        <Input
          id={`custom-css-standard-input-${this.state.uniqueId}`}
          fullWidth
          onChange={(event) => this.props.onChange && this.props.onChange(event.currentTarget.value)}
        />
      </FormControl>
    );
  }
}

InputClass.props = {
  onChange: PropTypes.func,
};

export default withStyles(styles)(InputClass);
