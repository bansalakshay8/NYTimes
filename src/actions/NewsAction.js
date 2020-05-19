import { FETCH_NEWS_ACTION, FETCH_NEWS_RESET } from "./ActionTypes";

export const fetchNewsAction = (searchTerm) => {
  return {
    type: FETCH_NEWS_ACTION,
    payload: searchTerm,
  };
};
export const resetNewsAction = () => {
  return {
    type: FETCH_NEWS_RESET,
  };
};
