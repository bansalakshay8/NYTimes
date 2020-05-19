/*Redux reducer for handling registration related actions*/
import {
  REG_ACTION,
  REG_SUC,
  REG_FAL,
  REG_RESET
} from "../actions/ActionTypes";

const initialState = {
  regSuccessful: "",
  error: "",
  loading: false,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case REG_ACTION:
      return {
        ...state,
        loading: true,
      };
    case REG_SUC:
      return {
        ...state,
        regSuccessful: action.payload,
        error: "",
        loading: false,
      };
    case REG_FAL:
      return {
        ...state,
        regSuccessful: "",
        error: action.payload,
        loading: false,
      };
      case REG_RESET:
        return{
          regSuccessful: "",
          error: "",
          loading: false,
        }
    default:
      return state;
  }
}

export default authReducers;
