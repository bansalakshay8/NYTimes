import {
  FETCH_NEWS_ACTION,
  FETCH_NEWS_SUCS,
  FETCH_NEWS_RESET,
  FETCH_NEWS_FAIL,
} from "../actions/ActionTypes";

const initialState = {
  searchError: "",
  searchResult: [],
  searchCompleted:false,
  searching:false
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_ACTION:
      return { ...state, searchError: "", searchResult: [],searchCompleted:false,searching:true };
    case FETCH_NEWS_SUCS:
      return { ...state, searchError: "", searchResult: action.payload,searchCompleted:true,searching:false };
    case FETCH_NEWS_FAIL:
      return { ...state, searchError: action.payload, searchResult: [],searchCompleted:true,searching:false };
    case FETCH_NEWS_RESET:
      return { ...state, searchError: "", searchResult: [],searchCompleted:false,searching:false };
    default:
      return state;
  }
};

export default newsReducer;
