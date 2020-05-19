/*Redux reducer for handling comments related actions*/
import {
  CUSTOM_NEWS_ACTION,
  CUSTOM_NEWS_SUCS,
  CUSTOM_NEWS_FAIL,
  CUSTOM_NEWS_RESET,
} from "../actions/ActionTypes";

const initialState = {
  searchError: "",
  searchResult: [],
  searchCompleted: false,
  searching: false,
  searchedWords: [],
  wordToBeSearched: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOM_NEWS_ACTION:
      console.log("checking search action 1");
      if (action.payload.index > 0) {
        return {
          ...state,
          searchError: "",
          searchCompleted: false,
          searching: true,
        };
      } else {
        return {
          ...state,
          searchError: "",
          searchCompleted: false,
          searching: true,
          wordToBeSearched: action.payload.searchTerm,
        };
      }
    case CUSTOM_NEWS_SUCS:
      console.log("checking search action 2");
      //return { ...state, searchError: "", searchResult: [...state.searchResult,...action.payload],searchCompleted:true,searching:false,searchedWords:[...searchedWords,state.wordToBeSearched] };
      if (state.wordToBeSearched != "") {
        let modifiedSearchedWord;
        if (state.searchedWords.length > 4) {
          modifiedSearchedWord = state.searchedWords
            .slice(1)
            .concat(state.wordToBeSearched);
        } else {
          modifiedSearchedWord = [
            ...state.searchedWords,
            state.wordToBeSearched,
          ];
        }
        return {
          ...state,
          searchError: "",
          searchResult: [...state.searchResult, ...action.payload],
          searchCompleted: true,
          searching: false,
          searchedWords: modifiedSearchedWord,
          wordToBeSearched: "",
        };
      } else {
        return {
          ...state,
          searchError: "",
          searchResult: [...state.searchResult, ...action.payload],
          searchCompleted: true,
          searching: false,
          // searchedWords: [...state.searchedWords, state.wordToBeSearched],
          wordToBeSearched: "",
        };
      }
    case CUSTOM_NEWS_FAIL:
      console.log("checking search action 3");
      return {
        ...state,
        searchError: action.payload,
        searchResult: [],
        searchCompleted: true,
        searching: false,
        wordToBeSearched: "",
      };
    case CUSTOM_NEWS_RESET:
      console.log("checking search action 4");
      return {
        ...state,
        searchError: "",
        searchResult: [],
        searchCompleted: false,
        searching: false,
        wordToBeSearched: "",
        // searchedWords: [],
      };
    default:
      return state;
  }
};

export default searchReducer;
