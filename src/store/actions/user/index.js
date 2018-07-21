import axios from 'axios';

export const userLogin = (email, password) => dispatch => {
  axios({
    method: 'POST',
    url: 'http://localhost:4001/api/login',
    data: {
      email,
      password
    }
  }).then(response => {
    const axiosResponse = response.data;
    if (axiosResponse.statusCode === 200 && !axiosResponse.error) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          userInfo: {
            name: axiosResponse.data.payload.name,
            email: axiosResponse.data.payload.email
          }
        }
      });
    }
  });
};
