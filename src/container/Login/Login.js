import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    marginTop: 100,
    textAlign: 'center'
  },
  wrapper: {
    maxWidth: 400,
    margin: '0 auto'
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <div>註冊</div>
            <TextField
              id="name"
              label="姓名"
              className={classes.textField}
              value={''}
              onChange={e => console.log(e.target.value)}
              margin="normal"
            />
            <TextField
              id="name"
              label="信箱"
              placeholder="信箱為您的登入帳號"
              className={classes.textField}
              value={''}
              onChange={e => console.log(e.target.value)}
              margin="normal"
            />
            <TextField
              id="name"
              label="密碼"
              className={classes.textField}
              value={''}
              onChange={e => console.log(e.target.value)}
              margin="normal"
            />
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                確認註冊
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
