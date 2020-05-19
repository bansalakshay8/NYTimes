/*Saga to handle search news action*/
import {
  CUSTOM_NEWS_SUCS,
  CUSTOM_NEWS_FAIL,
  REFRESH_TOKEN_ACTION,
} from "../actions/ActionTypes";
import { put, call } from "redux-saga/effects";
import { makeCustomSearch } from "../apis/api";
import { checkTokenExpiry } from "./index";

export function* fetchCustomNews(action) {
  try {
    if (checkTokenExpiry()) {
      yield put({ type: REFRESH_TOKEN_ACTION });
    }
    const resp = yield call(makeCustomSearch, action.payload);
    if (resp.status == "OK") {
      yield put({ type: CUSTOM_NEWS_SUCS, payload: resp.response.docs });
    } else {
      yield put({
        type: CUSTOM_NEWS_FAIL,
        payload: "Issue while searching news",
      });
    }
  } catch (error) {
    yield put({
      type: CUSTOM_NEWS_FAIL,
      payload: "Issue while searching news",
    });
  }
}
