import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/** container */
import App from './container/App/App';
import Wrapper from './container/Wrapper/Wrapper';
import Register from './container/Register/Register';
import Login from './container/Login/Login';

/** reducers */
import registerReducer from './store/reducers/register';
import userReducer from './store/reducers/user';

/** redux instance */
import { Provider } from 'react-redux';
import store from './store';

const checkUserStatus = window.userInfo;
const initStore = store({ register: registerReducer, user: userReducer });

if (checkUserStatus.payload && checkUserStatus.payload.isLogin) {
  initStore.dispatch({
    type: 'LOGIN_SUCCESS',
    payload: {
      userInfo: {
        name: checkUserStatus.payload.userInfo.name,
        email: checkUserStatus.payload.userInfo.email
      }
    }
  });
}

ReactDOM.render(
  <Router>
    <Provider store={initStore}>
      <div>
        <App />
        <Route exact path="/" component={Wrapper} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    </Provider>
  </Router>,
  document.getElementById('root')
);
