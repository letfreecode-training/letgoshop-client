import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  'link-color': {
    color: '#000'
  }
};

const barTitleStyle = {
  color: '#000',
  textDecorationLine: 'none'
};

class TopBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Link style={barTitleStyle} className={classes.flex} to="/">
              <Typography variant="title" color="inherit">
                LetGoShop
              </Typography>
            </Link>
            <Link className={classes['link-color']} to="/login">
              <Button color="inherit">註冊 | 登入</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopBar);
