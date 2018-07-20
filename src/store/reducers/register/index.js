const initialState = {
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
    default:
      return state;
  }
};

export default registerReducer;
