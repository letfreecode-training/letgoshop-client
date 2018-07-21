const initialState = {
  registerStatus: {
    success: false,
    error: undefined
  },
  name: '',
  email: '',
  password: ''
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PASSWORD':
      return Object.assign({}, state, {
        password: action.payload
      });
    case 'CHANGE_NAME':
      return Object.assign({}, state, {
        name: action.payload
      });
    case 'CHANGE_EMAIL':
      return Object.assign({}, state, {
        email: action.payload
      });
    case 'REGISTER_USER_SUCCESS':
      return Object.assign({}, state, {
        registerStatus: {
          success: true,
          error: undefined
        },
        email: '',
        name: '',
        password: ''
      });
    case 'REGISTER_USER_FAIL':
      return Object.assign({}, state, {
        registerStatus: {
          success: false,
          error: action.payload.errors
        }
      });
    default:
      return state;
  }
};

export default registerReducer;
