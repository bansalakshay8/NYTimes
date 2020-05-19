import {
    CUSTOM_NEWS_ACTION,
    CUSTOM_NEWS_RESET,
  } from "./ActionTypes";

export const fetchCustomNewsAction = (searchObject) => {
    return {
      type: CUSTOM_NEWS_ACTION,
      payload: searchObject,
    };
  };
  export const resetCustomNewsAction = () => {
    return {
      type: CUSTOM_NEWS_RESET,
    };
  };