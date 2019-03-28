import React from 'react';
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
  render() {
    const { classes } = this.props;
    return (
      <FormControl >
        <InputLabel
          htmlFor="custom-css-standard-input"
          classes={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
          Custom CSS
        </InputLabel>
        <Input
          id="custom-css-standard-input"
          classes={{
            underline: classes.cssUnderline,
          }}
        />
      </FormControl>
    );
  }
}

export default withStyles(styles)(InputClass);
