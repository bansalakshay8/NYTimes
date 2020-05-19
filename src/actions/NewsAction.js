/* This file contains action dispatchers for handling news in Science and World tab */

import { FETCH_NEWS_ACTION, FETCH_NEWS_RESET } from "./ActionTypes";

//action dispatcher for fetching news on clicking the World/Science
export const fetchNewsAction = (searchTerm) => {
  return {
    type: FETCH_NEWS_ACTION,
    payload: searchTerm,
  };
};

//action dispatcher for resetting state corresponding to news
export const resetNewsAction = () => {
  return {
    type: FETCH_NEWS_RESET,
  };
};
