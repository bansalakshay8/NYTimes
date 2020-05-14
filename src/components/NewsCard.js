import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-elements";

class NewsCard extends Component {
  render() {
    return (
      //   <View>
      //     <Text>{this.props.newsData.title}</Text>
      //   </View>
      <Card
        title={this.props.newsData.title}
        image={{ uri: this.props.newsData.multimedia[0].url }}
        containerStyle={{ borderRadius: 6, paddingHorizontal: 10 }}
      >
        <Text style={{ fontSize: 9, alignSelf: "flex-end" }}>
          {`Pulished Date: ${this.props.newsData.published_date}`}
        </Text>
      </Card>
    );
  }
}

export default NewsCard;
