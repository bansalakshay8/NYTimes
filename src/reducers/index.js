import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import newsReducer from "./newsReducer";
import searchReducer from "./searchReducer";
import commentReducer from "./commentReducer";

const allReducers = combineReducers({
  authReducer,
  loginReducer,
  newsReducer,
  searchReducer,
  commentReducer
});

export default allReducers;
