/*Saga to handle login user action*/
import { LOGIN_SUC, LOGIN_FAL } from "../actions/ActionTypes";
import { put, call } from "redux-saga/effects";
import { makeLoginCall } from "../apis/api";

export function* loginUser(action) {
  try {
    let params = {
      email: action.payload.email,
      password: action.payload.password,
    };
    if (action.payload.email == "" || action.payload.password == "") {
      yield put({
        type: LOGIN_FAL,
        payload: "Please enter mandatory credentials",
      });
    } else {
      const response = yield call(makeLoginCall, params);
      if (response.access_token == undefined) {
        yield put({ type: LOGIN_FAL, payload: "Issue while signing-in" });
      } else {
        yield put({ type: LOGIN_SUC, payload: response.access_token });
      }
    }
  } catch (error) {
    yield put({ type: LOGIN_FAL, payload: "Issue while signing-in" });
  }
}
