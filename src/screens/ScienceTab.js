import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
// import Spinner from 'react-native-loading-spinner-overlay';
import Icon from "react-native-vector-icons/MaterialIcons";
import { fetchNewsAction, resetNewsAction } from "../actions";

class ScienceTab extends Component {
    checkError = () => {
        const { searchCompleted, searching, searchError } = this.props;
        if (searchCompleted == true && searching == false && searchError != "") {
          return (
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Icon name="error-outline" size={16} color="black" />
              <Text>{searchError}</Text>
            </View>
          );
        }
      };
  render() {
    return (
      <View style={styles.container}>
        {this.checkError()}
        <Text>Science TAB</Text>
        <Text>{this.props.searchResult.length}</Text>
      </View>
    );
  }
  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      this.props.resetNews();
      this.props.fetchNews({ searchText: "science" });
    });
  }
  componentWillUnmount() {
    this.focusListener.remove();
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

const scienceContainer = connect(mapStateToProps, mapDispatchToProps)(ScienceTab);
export default scienceContainer;
