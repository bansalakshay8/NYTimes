/* This file contains component to show the categorized(World/Science) news in the form of list. */
import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";

import Icon from "react-native-vector-icons/MaterialIcons";
import { fetchNewsAction, resetNewsAction } from "../actions";
import NewsList from "./NewsList";

class CatergorizedNews extends Component {
  //function to check if the fetching news is successful or is there any error
  checkError = () => {
    //console.log('for checking activity indicator')
    const { searchCompleted, searching, searchError } = this.props;
    if (searchCompleted == true && searching == false && searchError != "") {
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name="error-outline" size={16} color="black" />
          <Text>{searchError}</Text>
        </View>
      );
    } else if (
      searchCompleted == true &&
      searching == false &&
      searchError == ""
    ) {
      return (
        <NewsList
          data={this.props.searchResult}
          navigationProp={this.props.navigationProp}
        />
      );
    }
  };

  render() {
    if (this.props.searchTerm == "") {
      return (
        <View style={styles.container}>
          <Text>Search news</Text>
        </View>
      );
    } else {
      if (this.props.searching == true && this.props.searchCompleted == false) {
        return (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#b30000" />
            <Text style={{ color: "#b30000" }}>Fetching news</Text>
          </View>
        );
      } else {
        return <View style={styles.container}>{this.checkError()}</View>;
      }
    }
  }
  componentDidMount() {
    this.props.resetNews();
    this.props.fetchNews({ searchText: this.props.searchTerm });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9a9a9a",
  },
});

const mapStateToProps = (state) => {
  return {
    searchError: state.newsReducer.searchError,
    searchResult: state.newsReducer.searchResult,
    searchCompleted: state.newsReducer.searchCompleted,
    searching: state.newsReducer.searching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: (searchTerm) => {
      dispatch(fetchNewsAction(searchTerm));
    },
    resetNews: () => {
      dispatch(resetNewsAction());
    },
  };
};

const catNewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CatergorizedNews);
export default catNewsContainer;
