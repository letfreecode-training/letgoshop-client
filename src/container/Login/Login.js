import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { userLogin } from '../../store/actions/user';

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
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }
  render() {
    const {
      classes,

      // redux actions
      userLogin
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <div>登入</div>
            <TextField
              id="email"
              label="信箱"
              className={classes.textField}
              value={this.state.email}
              margin="normal"
              onChange={e => {
                e.persist();
                this.setState(state => ({
                  email: e.target.value
                }));
              }}
            />
            <TextField
              id="password"
              label="密碼"
              type="password"
              className={classes.textField}
              value={this.state.password}
              margin="normal"
              onChange={e => {
                e.persist();
                this.setState(state => ({
                  password: e.target.value
                }));
              }}
            />
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => userLogin(this.state.email, this.state.password)}
              >
                登入
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  userLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
