import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './container/App/App';
import Wrapper from './container/Wrapper/Wrapper';
import Register from './container/Register/Register';

/** reducers */
import registerReducer from './store/reducers/register';

/** redux instance */
import store from './store';

const initStore = store({ register: registerReducer });

ReactDOM.render(
  <Router>
    <div>
      <App />
      <Route exact path="/" component={Wrapper} />
      <Route exact path="/register" component={Register} />
    </div>
  </Router>,
  document.getElementById('root')
);
