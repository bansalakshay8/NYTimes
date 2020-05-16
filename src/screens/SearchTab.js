import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import IconF from "react-native-vector-icons/Fontisto";
import SearchResultComp from "../components/SearchResultComp";
import { connect } from "react-redux";

import { fetchCustomNewsAction, resetCustomNewsAction } from "../actions";

class SearchTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      index: 0,
      searchingMore: false,
    };
  }
  render() {
    const {
      searchError,
      searchResult,
      searchCompleted,
      searching,
      searchedWords,
    } = this.props;

    return (
      <View style={styles.container}>
        <SearchBar
          value={this.state.searchTerm}
          onChangeText={(t) => this.searchChanged(t)}
          clearIcon={{
            iconStyle: { margin: 10 },
            containerStyle: { margin: -10 },
          }}
          searchIcon={{ size: 20 }}
          placeholder="Search news"
          containerStyle={styles.searchContainerStyle}
          inputContainerStyle={styles.searchInputContainerStyle}
          inputStyle={styles.searchInputStyle}
        />
        {searchedWords.length > 0 && (
          <View
            style={{
              alignSelf: "flex-start",
              marginHorizontal: 10,
              flexDirection: "row",
              flexWrap: 'wrap'
            }}
          >
            <Text style={{color:'#fff'}}>Recent Searches :</Text>
            {searchedWords.map((word) => {
              return (
                <TouchableOpacity onPress={()=>{
                  this.pressedHistory(word)
                }}>
                  <View
                    style={{
                      backgroundColor: "#b30000",
                      marginHorizontal: 5,
                      borderRadius: 5,
                    }}
                    on
                  >
                    <Text style={{ padding: 3, fontSize: 12, color: "#fff" }}>
                      {word}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        <SearchResultComp
          searchErr={searchError}
          searchRes={searchResult}
          searchComp={searchCompleted}
          searching={searching}
          searchMore={this.searchMoreHandler}
          searchingMore={this.state.searchingMore}
        />
      </View>
    );
  }
  searchMoreHandler = () => {
    this.setState(
      {
        index: this.state.index + 1,
        searchingMore: true,
      },
      () => {
        this.props.fetchNews({
          searchTerm: this.state.searchTerm,
          index: this.state.index,
        });
      },
    );
  };

  
  pressedHistory=(word)=>{
    this.setState({
      searchTerm:word,
      index: 0,
      searchingMore: false,
    },()=>{
      this.props.fetchNews({ searchTerm:this.state.searchTerm, index: this.state.index });
    })
  }
  searchChanged = (searchTerm) => {
    //console.log('inside searchChanged')
    this.setState(
      {
        searchTerm,
        index: 0,
        searchingMore: false,
      },
      () => {
        if (this.state.searchTerm != "") {
          this.props.fetchNews({ searchTerm, index: this.state.index });
        } else {
          this.props.resetNews();
        }
      },
    );
    // console.log("checking search 1");
  };
  componentDidMount() {
    const { navigation } = this.props;
    this.blurListener = navigation.addListener("didBlur", () => {
      this.setState({
        searchTerm: "",
        index: 0,
        searchingMore: false,
      });
      this.props.resetNews();
    });
  }
  componentWillUnmount() {
    this.blurListener.remove();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent:'center',
    backgroundColor: "#9a9a9a",
  },
  searchInputStyle: {
    color: "#000",
    paddingVertical: 0,
  },
  searchInputContainerStyle: {
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 10,
  },
  searchContainerStyle: {
    width: "100%",
    marginTop: 10,
    backgroundColor: "#9a9a9a",
    borderBottomWidth: 0,
    borderTopWidth: 0,
    // backgroundColor:'green'
  },
});

const mapStateToProps = (state) => {
  return {
    searchError: state.searchReducer.searchError,
    searchResult: state.searchReducer.searchResult,
    searchCompleted: state.searchReducer.searchCompleted,
    searching: state.searchReducer.searching,
    searchedWords: state.searchReducer.searchedWords,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: (searchObject) => {
      //   console.log("checking search 5");
      dispatch(fetchCustomNewsAction(searchObject));
    },
    resetNews: () => {
      dispatch(resetCustomNewsAction());
    },
  };
};

const searchTabContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchTab);
export default searchTabContainer;
