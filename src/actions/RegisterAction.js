/* This file contains action dispatchers for handling registraction */

import { REG_ACTION, REG_RESET } from "./ActionTypes";

//action dispatcher for making registration call
export const regAction = (credentials) => {
  return {
    type: REG_ACTION,
    payload: credentials,
  };
};

/*action dispatcher for handling reset registration when user moves away from registration screen*/
export const resetRegAction = () => {
  return {
    type: REG_RESET,
  };
};
