import {
    REG_ACTION,
    REG_RESET
  } from "./ActionTypes";

export const regAction = (credentials) => {
    return {
      type: REG_ACTION,
      payload: credentials,
    };
  };
  export const resetRegAction = () => {
    return {
      type: REG_RESET,
    };
  };