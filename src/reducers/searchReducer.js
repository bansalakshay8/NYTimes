import {
    CUSTOM_NEWS_ACTION,
    CUSTOM_NEWS_SUCS,
    CUSTOM_NEWS_FAIL,
    CUSTOM_NEWS_RESET,
  } from "../actions/ActionTypes";
  
  const initialState = {
    searchError: "",
    searchResult: [],
    searchCompleted:false,
    searching:false,
    // searchedWords:[],
    // wordToBeSearched:''
  };
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case CUSTOM_NEWS_ACTION:
        console.log('checking search action 1')
        return { ...state, searchError: "", searchResult: [],searchCompleted:false,searching:true };
      case CUSTOM_NEWS_SUCS:
        console.log('checking search action 2')
        return { ...state, searchError: "", searchResult: action.payload,searchCompleted:true,searching:false };
      case CUSTOM_NEWS_FAIL:
        console.log('checking search action 3')
        return { ...state, searchError: action.payload, searchResult: [],searchCompleted:true,searching:false };
      case CUSTOM_NEWS_RESET:
        console.log('checking search action 4')
        return { ...state, searchError: "", searchResult: [],searchCompleted:false,searching:false };
      default:
        return state;
    }
  };
  
  export default searchReducer;
  