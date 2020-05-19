/* This file contains action dispatchers for handling comments */

import { FETCH_COMMENTS_ACTION, FETCH_COMMENTS_RESET } from "./ActionTypes";

//action dispatcher for making fetch action comments call
export const fetchCommentAction = (commentObject) => {
  return {
    type: FETCH_COMMENTS_ACTION,
    payload: commentObject,
  };
};

//action dispatcher when user moves away from screen where comments are displayed
export const resetCommentAction = () => {
  return {
    type: FETCH_COMMENTS_RESET,
  };
};
