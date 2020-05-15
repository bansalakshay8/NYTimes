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

class SearchFromTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldSearch: false,
      searchTerm: "",
    };
  }
  checkError = () => {
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
      return <NewsList data={this.props.searchResult} />;
    }
  };

  render() {
    if (this.state.shouldSearch)
      if (this.props.searchTerm == "") {
        return (
          <View style={styles.container}>
            <Text>Search news</Text>
          </View>
        );
      } else {
        if (
          this.props.searching == true &&
          this.props.searchCompleted == false
        ) {
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
    this.setState({
      searchTerm: this.props.searchTerm,
    });
    this.props.fetchNews({ searchText: this.props.searchTerm });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.searchTerm !== prevState.searchTerm) {
      return { shouldSearch: true };
    } else return null;
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

const sftContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchFromTab);
export default sftContainer;
