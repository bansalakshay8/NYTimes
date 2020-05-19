/*saga file which is exposed to app container*/
import { call, all, takeLatest } from "redux-saga/effects";
import { decode as atob, encode as btoa } from "base-64";
import { makeRefreshTokenCall } from "../apis/api";
import {
  REG_ACTION,
  LOGIN_ACTION,
  FETCH_NEWS_ACTION,
  CUSTOM_NEWS_ACTION,
  FETCH_COMMENTS_ACTION,
  REFRESH_TOKEN_ACTION,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
} from "../actions/ActionTypes";
import { getToken, setToken } from "../apis/api";

import { registerUser } from "./registerSaga";
import { loginUser } from "./loginSaga";
import { fetchNews } from "./newsSaga";
import { fetchCustomNews } from "./searchSaga";
import { fetchComments } from "./commentSaga";

/*function to check JWT token expiry during each network call*/
export function checkTokenExpiry() {
  console.log("checking token expiry");
  let currToken = getToken();
  let currTokenObj = JSON.parse(atob(currToken.split(".")[1]));
  let now = Date.now().valueOf() / 1000;
  if (typeof currTokenObj.exp !== "undefined" && currTokenObj.exp < now) {
    return true;
  } else if (
    typeof currTokenObj.exp !== "undefined" &&
    currTokenObj.exp > now
  ) {
    return false;
  }
}

/*function to refresh JWT token, if it is expired*/
function* refreshTokenCall() {
  const response = yield call(makeRefreshTokenCall);
  setToken(response.access_token);
}

/*watcher function for user registration*/
export function* regWatcher() {
  yield takeLatest(REG_ACTION, registerUser);
}

/*watcher function for user login*/
export function* loginWatcher() {
  yield takeLatest(LOGIN_ACTION, loginUser);
}

/*watcher function for fetch categorized news action*/
export function* fetchNewsWatcher() {
  yield takeLatest(FETCH_NEWS_ACTION, fetchNews);
}

/*watcher function for search news action*/
export function* customSearchWatcher() {
  yield takeLatest(CUSTOM_NEWS_ACTION, fetchCustomNews);
}

/*watcher function for fetch comments action*/
export function* fetchCommentWatcher() {
  yield takeLatest(FETCH_COMMENTS_ACTION, fetchComments);
}

/*watcher function for refresh token action*/
export function* refreshTokenWatcher() {
  yield takeLatest(REFRESH_TOKEN_ACTION, refreshTokenCall);
}

export default function* rootSaga() {
  yield all([
    call(regWatcher),
    call(loginWatcher),
    call(fetchNewsWatcher),
    call(customSearchWatcher),
    call(fetchCommentWatcher),
    call(refreshTokenWatcher),
  ]);
}
