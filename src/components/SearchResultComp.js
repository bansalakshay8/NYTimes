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
  render() {
    // console.log('checking search 4')
    const { searching, searchComp, searchRes, searchErr } = this.props;
    if (searching == true && searchComp == false) {
      // console.log('checking search 2')
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
          <NewsList data={searchRes} customSearch={true} />
        </View>
      );
    } else if (
      searching == false &&
      searchComp == true &&
      searchErr != ""
    ) {
      return (
        <View
          style={[styles.container,{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }]}
        >
          <Icon name="error-outline" size={16} color="black" />
          <Text>{searchErr}</Text>
        </View>
      );
    } else {
        console.log(this.props.searching)
        console.log(this.props.searchComp)
        console.log(this.props.searchRes)
        console.log(this.props.searchErr)
      // console.log('checking search 3')
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
