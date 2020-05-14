import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
// import Spinner from 'react-native-loading-spinner-overlay';
import Icon from "react-native-vector-icons/MaterialIcons";
import { fetchNewsAction, resetNewsAction } from "../actions";
import NewsCard from "../components/NewsCard";

class WorldTab extends Component {
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
    }
    // return (<Text>WORLD</Text>)
  };

  render() {
    return (
      <View style={styles.container}>
        {this.checkError()}
        {this.props.searchCompleted == true &&
          this.props.searching == false &&
          this.props.searchError == "" && (
            <NewsCard newsData={this.props.searchResult[0]} />
          )}
      </View>
    );
  }
  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      this.props.resetNews();
      this.props.fetchNews({ searchText: "world" });
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
      console.log("FETCH NEWS VIEW");
      dispatch(fetchNewsAction(searchTerm));
    },
    resetNews: () => {
      dispatch(resetNewsAction());
    },
  };
};

const worldContainer = connect(mapStateToProps, mapDispatchToProps)(WorldTab);
export default worldContainer;
