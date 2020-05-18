import { createStore, applyMiddleware } from "redux";
import AllReducers from "./src/reducers";
import createSagaMiddeleware from "redux-saga";
import {decode as atob, encode as btoa} from 'base-64';
import { LOGIN_SUC, FETCH_NEWS_ACTION } from "./src/actions//ActionTypes";
import { setToken, getToken } from "./src/apis/api";

const saveAuthToken = (store) => (next) => (action) => {
  if (action.type === LOGIN_SUC) {
    // after a successful login, update the token in the API
    // console.log("LOGIN INTERCEPTED:"+action.payload);
    setToken(action.payload);
  }

  // continue processing this action
  return next(action);
};

// check expiry of token during API call and if expired refresh token
const checkExpiredToken = (store) => (next) => (action) => {
  if (action.type === FETCH_NEWS_ACTION) {
    let currToken = getToken();
    let currTokenObj = JSON.parse(atob(currToken.split(".")[1]));
    let now=Date.now().valueOf() / 1000;
    if (typeof currTokenObj.exp !== 'undefined' && currTokenObj.exp < now) {
      console.log('token is expired')
    }else if(typeof currTokenObj.exp !== 'undefined' && currTokenObj.exp > now){
      console.log('token is not expired')
    }
  }
  return next(action);
};

export const sagaMiddleware = createSagaMiddeleware();
export const store = createStore(
  AllReducers,
  applyMiddleware(sagaMiddleware, saveAuthToken),
);
