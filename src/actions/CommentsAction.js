import { FETCH_COMMENTS_ACTION, FETCH_COMMENTS_RESET } from "./ActionTypes";

export const fetchCommentAction = (commentObject) => {
  return {
    type: FETCH_COMMENTS_ACTION,
    payload: commentObject,
  };
};
export const resetCommentAction = () => {
  return {
    type: FETCH_COMMENTS_RESET,
  };
};
