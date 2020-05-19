/* This file contains action dispatchers for handling search news tab*/

import { CUSTOM_NEWS_ACTION, CUSTOM_NEWS_RESET } from "./ActionTypes";

//action dispatcher for making search news call
export const fetchCustomNewsAction = (searchObject) => {
  return {
    type: CUSTOM_NEWS_ACTION,
    payload: searchObject,
  };
};

//action dispatcher for when user moves away from search news tab
export const resetCustomNewsAction = () => {
  return {
    type: CUSTOM_NEWS_RESET,
  };
};
