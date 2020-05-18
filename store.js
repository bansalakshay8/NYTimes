import { createStore, applyMiddleware } from "redux";
import AllReducers from "./src/reducers";
import createSagaMiddeleware from "redux-saga";
import {LOGIN_SUC} from './src/actions//ActionTypes';
import {setToken} from './src/apis/api';

const saveAuthToken = (store) => (next) => (action) => {
  if (action.type === LOGIN_SUC) {
    // after a successful login, update the token in the API
    // console.log("LOGIN INTERCEPTED:"+action.payload);
    setToken(action.payload);
  }

  // continue processing this action
  return next(action);
};

export const sagaMiddleware = createSagaMiddeleware();
export const store = createStore(
  AllReducers,
  applyMiddleware(sagaMiddleware, saveAuthToken),
);
