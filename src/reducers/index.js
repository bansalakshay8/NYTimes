import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import searchReducer from "./searchReducer";

const allReducers = combineReducers({
  authReducer,
  loginReducer,
  searchReducer,
});

export default allReducers;
