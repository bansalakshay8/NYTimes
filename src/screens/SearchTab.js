import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
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
    };
  }
  render() {
    const {
      searchError,
      searchResult,
      searchCompleted,
      searching,
      // searchedWords
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
        <SearchResultComp
          searchErr={searchError}
          searchRes={searchResult}
          searchComp={searchCompleted}
          searching={searching}
        />
      </View>
    );
  }

  searchChanged = (searchTerm) => {
      
    this.setState({
      searchTerm,
    },()=>{
        if(this.state.searchTerm!=''){
            this.props.fetchNews(searchTerm);
        }else{
            this.props.resetNews();
        }
    });
    // console.log("checking search 1");
  };
  componentDidMount() {
    const { navigation } = this.props;
    this.blurListener = navigation.addListener("didBlur", () => {
      this.setState({
        searchTerm:""
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
    // searchedWords : state.searchReducer.searchedWords
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: (searchTerm) => {
    //   console.log("checking search 5");
      dispatch(fetchCustomNewsAction(searchTerm));
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
