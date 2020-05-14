import {
  put,
  delay,
  call,
  all,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import axios from "axios";
import { makeRegisterCall } from "../apis/api";
import {
  REG_ACTION,
  REG_SUC,
  REG_FAL,
  LOGIN_ACTION,
  LOGIN_SUC,
  LOGIN_FAL,
} from "../actions/ActionTypes";

export function* registerUser(action) {
  try {
    let params = {
      email: action.payload.email,
      password: action.payload.password,
    };

    // const response = yield axios.post("http://localhost:8000/auth/register", params);
    const response = yield call(makeRegisterCall, params);

    console.log(response);
    if (response.access_token == undefined) {
      yield put({ type: REG_FAL, payload: "**Issue while registeration" });
    } else {
      yield put({ type: REG_SUC, payload: response.access_token });
    }
  } catch (error) {
    yield put({ type: REG_FAL, payload: "**Issue while signing-in" });
  }
}


export function* loginUser(action) {
  try {
    let params = {
      email: action.payload.email,
      password: action.payload.password,
    };

    // const response = yield axios.post("http://localhost:8000/auth/register", params);
    const response = yield call(makeRegisterCall, params);

    console.log(response);
    if (response.access_token == undefined) {
      yield put({ type: REG_FAL, payload: "**Issue while registeration" });
    } else {
      yield put({ type: REG_SUC, payload: response.access_token });
    }
  } catch (error) {
    yield put({ type: REG_FAL, payload: "**Issue while signing-in" });
  }
}


export function* regWatcher() {
  yield takeLatest(REG_ACTION, registerUser);
}

export function* loginWatcher() {
  yield takeLatest(LOGIN_ACTION, loginUser);
}

export default function* rootSaga() {
  yield all([call(regWatcher), call(loginWatcher())]);
}
