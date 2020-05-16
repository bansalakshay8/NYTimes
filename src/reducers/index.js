import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import newsReducer from "./newsReducer";
import searchReducer from "./searchReducer";

const allReducers = combineReducers({
  authReducer,
  loginReducer,
  newsReducer,
  searchReducer,
});

export default allReducers;
