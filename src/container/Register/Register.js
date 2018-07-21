import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';

/** redux action */
import {
  registerUser,
  changePassword,
  changeEmail,
  changeName
} from '../../store/actions/register';

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

class Register extends Component {
  render() {
    const {
      classes,

      // redux register state
      register: { name, email, password, registerStatus },

      // redux action dispatch
      registerUser,
      changePassword,
      changeName,
      changeEmail
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <div>註冊</div>
            <div>
              {registerStatus.success
                ? '註冊成功'
                : registerStatus.error &&
                  registerStatus.error.errors.map((err, index) => {
                    return <div key={index}>{err}</div>;
                  })}
            </div>
            <TextField
              id="name"
              label="姓名"
              className={classes.textField}
              value={name}
              onChange={e => changeName(e.target.value)}
              margin="normal"
            />
            <TextField
              id="name"
              label="信箱"
              placeholder="信箱為您的登入帳號"
              className={classes.textField}
              value={email}
              onChange={e => changeEmail(e.target.value)}
              margin="normal"
            />
            <TextField
              id="name"
              label="密碼"
              type="password"
              className={classes.textField}
              value={password}
              onChange={e => changePassword(e.target.value)}
              margin="normal"
            />
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => {
                  registerUser({
                    name,
                    email,
                    password
                  });
                }}
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

const mapStateToProps = state => {
  return {
    register: state.register
  };
};

const mapDispatchToProps = {
  registerUser,
  changePassword,
  changeName,
  changeEmail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Register));
