/*Redux reducer for handling comment related actions*/
import {
  FETCH_COMMENTS_ACTION,
  FETCH_COMMENTS_SUCS,
  FETCH_COMMENTS_FAIL,
  FETCH_COMMENTS_RESET,
} from "../actions/ActionTypes";

const initialState = {
  commentsError: "",
  commentsResult: [],
  commentsCompleted: false,
  commentsSearching: false,
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_ACTION:
      return {
        ...state,
        commentsError: "",
        commentsResult: [],
        commentsCompleted: false,
        commentsSearching: true,
      };
    case FETCH_COMMENTS_SUCS:
      return {
        ...state,
        commentsError: "",
        commentsResult: action.payload,
        commentsCompleted: true,
        commentsSearching: false,
      };
    case FETCH_COMMENTS_FAIL:
      return {
        ...state,
        commentsError: action.payload,
        commentsResult: [],
        commentsCompleted: true,
        commentsSearching: false,
      };
    case FETCH_COMMENTS_RESET:
      return {
        ...state,
        commentsError: "",
        commentsResult: [],
        commentsCompleted: false,
        commentsSearching: false,
      };
    default:
      return state;
  }
};

export default commentReducer;
