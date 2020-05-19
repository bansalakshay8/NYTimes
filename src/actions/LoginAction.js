import { LOGIN_ACTION, LOGIN_LOGOUT } from "./ActionTypes";

export const loginAction = (credentials) => {
  return {
    type: LOGIN_ACTION,
    payload: credentials,
  };
};
export const resetLoginAction = () => {
  return {
    type: LOGIN_LOGOUT,
  };
};
