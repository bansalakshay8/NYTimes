/*Saga to handle user registration action*/
import { REG_SUC, REG_FAL } from "../actions/ActionTypes";
import { put, call } from "redux-saga/effects";
import { makeRegisterCall } from "../apis/api";

export function* registerUser(action) {
  try {
    let params = {
      email: action.payload.email,
      password: action.payload.password,
    };

    if (action.payload.email == "" || action.payload.password == "") {
      yield put({
        type: REG_FAL,
        payload: "Please enter mandatory credentials",
      });
    } else {
      const response = yield call(makeRegisterCall, params);
      if (response.access_token == undefined) {
        yield put({ type: REG_FAL, payload: "Issue while registeration" });
      } else {
        yield put({ type: REG_SUC, payload: response.access_token });
      }
    }
  } catch (error) {
    yield put({ type: REG_FAL, payload: "Issue while registeration" });
  }
}
