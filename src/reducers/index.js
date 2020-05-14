import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import newsReducer from "./newsReducer";

const allReducers = combineReducers({
  authReducer,
  loginReducer,
  newsReducer
});

export default allReducers;
