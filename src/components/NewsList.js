/* This file contains component to display the news list in 
categorized tab as well as search news tab */

import React from "react";
import { StyleSheet, FlatList, Text, View, Alert } from "react-native";
import NewsCard from "./NewsCard";

export default class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  loadMoreData=()=>{
    if(this.props.loadMore !=undefined){
      this.props.loadMore()
    }
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => 
            <NewsCard newsData={item} customSearch={this.props.customSearch} navigationProp={this.props.navigationProp}></NewsCard>
          }
          onEndReached={() => this.loadMoreData()}
          keyExtractor={(item, index) => item.uri}
          // ListFooterComponent={this.renderFooter()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    marginVertical:10
  },
});
