import React from "react";
import { StyleSheet, FlatList, Text, View, Alert } from "react-native";
import NewsCard from './NewsCard';

export default class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (
            <NewsCard newsData={item}></NewsCard>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
  },
});
