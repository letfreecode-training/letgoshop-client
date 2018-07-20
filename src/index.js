import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './container/App/App';
import Wrapper from './container/Wrapper/Wrapper';
import Login from './container/Login/Login';

ReactDOM.render(
  <Router>
    <div>
      <App />
      <Route exact path="/" component={Wrapper} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById('root')
);
