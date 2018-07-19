import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class SearchInput extends Component {
  render() {
    const { classes } = this.props;
    return (
      <TextField
        id="with-placeholder"
        placeholder="搜尋..."
        className={classes.textField}
        margin="normal"
      />
    );
  }
}

export default withStyles(styles)(SearchInput);
