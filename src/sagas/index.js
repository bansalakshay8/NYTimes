import {
  put,
  delay,
  call,
  all,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import axios from "axios";
import {
  makeRegisterCall,
  makeLoginCall,
  makeSearchCall,
  makeCustomSearch,
  fetchCommentCall,
} from "../apis/api";
import {
  REG_ACTION,
  REG_SUC,
  REG_FAL,
  LOGIN_ACTION,
  LOGIN_SUC,
  LOGIN_FAL,
  FETCH_NEWS_ACTION,
  FETCH_NEWS_SUCS,
  FETCH_NEWS_FAIL,
  CUSTOM_NEWS_ACTION,
  CUSTOM_NEWS_SUCS,
  CUSTOM_NEWS_FAIL,
  FETCH_COMMENTS_ACTION,
  FETCH_COMMENTS_SUCS,
  FETCH_COMMENTS_FAIL,
} from "../actions/ActionTypes";

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

export function* loginUser(action) {
  try {
    let params = {
      email: action.payload.email,
      password: action.payload.password,
    };
    
    // console.log("In Login SAGA");
    // console.log(response);
    if (action.payload.email == "" || action.payload.password == "") {
      yield put({
        type: LOGIN_FAL,
        payload: "Please enter mandatory credentials",
      });
    } else {
      const response = yield call(makeLoginCall, params);
      if (response.access_token == undefined) {
        // if (response.message != undefined) {
        //   yield put({ type: LOGIN_FAL, payload: response.message });
        // } else {
        yield put({ type: LOGIN_FAL, payload: "Issue while signing-in" });
        // }
      } else {
        yield put({ type: LOGIN_SUC, payload: response.access_token });
      }
    }
  } catch (error) {
    yield put({ type: LOGIN_FAL, payload: "Issue while signing-in" });
  }
}

export function* fetchNews(action) {
  try {
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

export function* fetchCustomNews(action) {
  try {
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

export function* fetchComments(action) {
  try {
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

export function* regWatcher() {
  yield takeLatest(REG_ACTION, registerUser);
}

export function* loginWatcher() {
  yield takeLatest(LOGIN_ACTION, loginUser);
}

export function* fetchNewsWatcher() {
  yield takeLatest(FETCH_NEWS_ACTION, fetchNews);
}
export function* customSearchWatcher() {
  yield takeLatest(CUSTOM_NEWS_ACTION, fetchCustomNews);
}
export function* fetchCommentWatcher() {
  yield takeLatest(FETCH_COMMENTS_ACTION, fetchComments);
}

export default function* rootSaga() {
  yield all([
    call(regWatcher),
    call(loginWatcher),
    call(fetchNewsWatcher),
    call(customSearchWatcher),
    call(fetchCommentWatcher),
  ]);
}
