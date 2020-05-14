import {
  LOGIN_ACTION,
  LOGIN_SUC,
  LOGIN_FAL,
  LOGIN_RESET,
} from "../actions/ActionTypes";

const initialState = {
  loggedIn: false,
  error: "",
  userToken:"" ,
  loading: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case REG_ACTION:
      return {
        ...state,
        loading: true,
      };
    case REG_SUC:
      return {
        ...state,
        loggedIn: true,
        error: "",
        userToken: action.payload,
        loading: false,
      };
    case REG_FAL:
      return {
        ...state,
        loggedIn: false,
        error: action.payload,
        userToken: "",
        loading: false,
      };
    case REG_RESET:
      return { ...state, 
        loggedIn: false, 
        error: "", 
        userToken: "", 
        loading: false 
    };
    default:
      return state;
  }
};

export default loginReducer;
