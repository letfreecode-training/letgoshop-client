import axios from 'axios';

type RegisterUserType = {
  name: string,
  email: string,
  password: string
};

export const registerUser = ({
  name,
  email,
  password
}: RegisterUserType) => dispatch => {
  axios({
    method: 'POST',
    url: 'http://localhost:4001/api/register',
    data: {
      email,
      name,
      password
    }
  }).then(response => {
    const data = response.data;
    if (data.statusCode === 200 && !data.error) {
      dispatch({
        type: 'REGISTER_USER_SUCCESS',
        payload: {
          name,
          email,
          password
        }
      });
    }
  });
};

export const changePassword = (value: string): changePasswordAction => ({
  type: 'CHANGE_PASSWORD',
  payload: value
});

export const changeName = (value: string) => ({
  type: 'CHANGE_NAME',
  payload: value
});

export const changeEmail = (value: string) => ({
  type: 'CHANGE_EMAIL',
  payload: value
});
