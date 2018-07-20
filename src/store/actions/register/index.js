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
