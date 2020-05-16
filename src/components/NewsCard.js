import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-elements";

class NewsCard extends Component {
  render() {
    if(this.props.customSearch!=true){
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
    }else{
      return  (
        <Card containerStyle={{ padding: 0, borderRadius: 10,flex:1 }}>
          <Text
            style={{
              paddingHorizontal: 20,
              paddingTop: 10,
              textAlign: "center",
              fontWeight: "bold",
              fontSize:16
            }}
          >
            {this.props.newsData.headline.main}
          </Text>
          <Text
            style={{
              paddingHorizontal: 15,
              paddingBottom: 10,
              textAlign: "justify",
              paddingTop:5,
              // fontWeight: "bold",
            }}
          >
            {this.props.newsData.abstract}
          </Text>
        </Card>
      )
    }
  }
}

export default NewsCard;
