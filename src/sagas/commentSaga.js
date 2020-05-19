/*Saga to handle fetch comment action*/
import {
  FETCH_COMMENTS_SUCS,
  FETCH_COMMENTS_FAIL,
  REFRESH_TOKEN_ACTION,
} from "../actions/ActionTypes";
import { put, call } from "redux-saga/effects";
import { fetchCommentCall } from "../apis/api";
import { checkTokenExpiry } from "./index";

export function* fetchComments(action) {
  try {
    if (checkTokenExpiry()) {
      yield put({ type: REFRESH_TOKEN_ACTION });
    }
    const resp = yield call(fetchCommentCall, action.payload);
    if (resp.status == "OK") {
      yield put({ type: FETCH_COMMENTS_SUCS, payload: resp.results.comments });
    } else {
      yield put({
        type: FETCH_COMMENTS_FAIL,
        payload: "Issue while fetching comments",
      });
    }
  } catch (error) {
    yield put({
      type: FETCH_COMMENTS_FAIL,
      payload: "Issue while fetching comments",
    });
  }
}
