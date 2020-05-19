/* This file contains component to display comments in the form of list(FLatlist).*/
import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

class CommentsList extends Component {
  render() {
    return (
      <View>
        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 16 }}>
          Comments
        </Text>
        <View>
          <FlatList
            // style={{paddingBottom:20}}
            data={this.props.commentsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => this.renderComment(item)}
            nestedScrollEnabled
          />
        </View>
      </View>
    );
  }
  //function to render each of the individual comment
  renderComment = (comment) => {
    return (
      <View style={Styles.commentContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={Styles.usernameStyle}>{comment.userDisplayName}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <Icon name="location-pin" size={15} color="grey" />
            <Text style={{ fontWeight: "bold", color: "grey" }}>
              {comment.userLocation}
            </Text>
          </View>
        </View>
        <Text style={Styles.commentTextStyle}>{comment.commentBody}</Text>
      </View>
    );
  };
}

const Styles = StyleSheet.create({
  commentContainer: {
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
  },
  commentTextStyle: {
    padding: 10,
    textAlign: "justify",
  },
  usernameStyle: {
    fontWeight: "bold",
    paddingTop: 2,
    paddingLeft: 10,
  },
});

export default CommentsList;
