const initialState = {
  isLogin: false,
  userInfo: {
    name: undefined,
    email: undefined
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      const { name, email } = action.payload.userInfo;
      return Object.assign({}, state, {
        isLogin: true,
        userInfo: {
          name,
          email
        }
      });
    case 'LOGIN_FAIL':
      return Object.assign({}, state, {
        isLogin: false,
        userInfo: {
          name: undefined,
          email: undefined
        }
      });
    default:
      return state;
  }
};

export default userReducer;
