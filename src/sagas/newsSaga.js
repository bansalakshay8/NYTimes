/*Saga to handle fetch categorized news action*/
import {
  FETCH_NEWS_SUCS,
  FETCH_NEWS_FAIL,
  REFRESH_TOKEN_ACTION,
} from "../actions/ActionTypes";
import { put, call } from "redux-saga/effects";
import { makeSearchCall } from "../apis/api";
import { checkTokenExpiry } from "./index";

export function* fetchNews(action) {
  try {
    if (checkTokenExpiry()) {
      yield put({ type: REFRESH_TOKEN_ACTION });
    }

    const response = yield call(makeSearchCall, action.payload);

    if (response.status == "OK") {
      yield put({ type: FETCH_NEWS_SUCS, payload: response.results });
    } else {
      yield put({ type: FETCH_NEWS_FAIL, payload: "Unable to fetch news" });
    }
  } catch (error) {
    yield put({ type: FETCH_NEWS_FAIL, payload: "Issue while fetching news" });
  }
}
