import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-elements";

class NewsCard extends Component {
  render() {
    return (
      <Card containerStyle={{ padding: 0, borderRadius: 10,flex:1 }}>
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 5,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {this.props.newsData.title}
        </Text>
        <Image
          source={{
            uri: this.props.newsData.multimedia[0].url,
          }}
          //defaultSource={require("../images/nyt_logo.png")}
          style={{
            marginBottom: -1,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginLeft: -1,
            backgroundColor: '#f1eff0',
            height: 145,
            width: "100.5%",
          }}
        ></Image>
      </Card>
    );
  }
}

export default NewsCard;
