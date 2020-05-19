/*Redux reducer for handling login related actions*/
import {
  LOGIN_ACTION,
  LOGIN_SUC,
  LOGIN_FAL,
  LOGIN_LOGOUT,
} from "../actions/ActionTypes";

const initialState = {
  loggedIn: false,
  error: "",
  userToken: "",
  loading: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUC:
      return {
        ...state,
        loggedIn: true,
        error: "",
        userToken: action.payload,
        loading: false,
      };
    case LOGIN_FAL:
      return {
        ...state,
        loggedIn: false,
        error: action.payload,
        userToken: "",
        loading: false,
      };
    case LOGIN_LOGOUT:
      return {
        ...state,
        loggedIn: false,
        error: "",
        userToken: "",
        loading: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
