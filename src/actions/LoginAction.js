/* This file contains action dispatchers for handling login */

import { LOGIN_ACTION, LOGIN_LOGOUT } from "./ActionTypes";

//action dispatcher for login call
export const loginAction = (credentials) => {
  return {
    type: LOGIN_ACTION,
    payload: credentials,
  };
};

//action dispatcher for resetting the login or logout functionality
export const resetLoginAction = () => {
  return {
    type: LOGIN_LOGOUT,
  };
};
