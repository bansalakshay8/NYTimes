/* This file contains component to display the search news results 
in the form of list(NewsList)*/

import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import { fetchCustomNewsAction, resetCustomNewsAction } from "../actions";
import NewsList from "./NewsList";

class SearchResultComp extends Component {
  loadMoreHandler = () => {
    this.props.searchMore();
  };
  render() {
    const {
      searching,
      searchComp,
      searchRes,
      searchErr,
      searchingMore,
    } = this.props;
    if (searching == true && searchComp == false && searchingMore == false) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#b30000" />
          <Text style={{ color: "#b30000" }}>Seaching news</Text>
        </View>
      );
    } else if (
      searching == false &&
      searchComp &&
      searchErr == "" &&
      searchRes != []
    ) {
      return (
        <View style={styles.container}>
          <NewsList
            data={searchRes}
            customSearch={true}
            loadMore={this.loadMoreHandler}
            navigationProp={this.props.navigationProp}
          />
        </View>
      );
    } else if (searching == false && searchComp == true && searchErr != "") {
      return (
        <View
          style={[
            styles.container,
            {
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <Icon name="error-outline" size={16} color="black" />
          <Text>{searchErr}</Text>
        </View>
      );
    } else if (
      searching == true &&
      searchComp == false &&
      searchingMore == true
    ) {
      return (
        <View style={styles.container}>
          <NewsList
            data={searchRes}
            customSearch={true}
            loadMore={this.loadMoreHandler}
            navigationProp={this.props.navigationProp}
          />
          <ActivityIndicator size="small" color="#b30000" />
          <Text style={{ color: "#b30000" }}>Loading more news</Text>
        </View>
      );
    } else {
      return null;
    }
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

export default SearchResultComp;
