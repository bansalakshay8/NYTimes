import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
// import { useNavigation } from '@react-navigation/native';

class NewsCard extends Component {
  render() {
    if (this.props.customSearch != true) {
      return (
        <TouchableOpacity
          style={Styles.cardContainerStyle}
          onPress={() => this.categorizedSearchCardClicked(this.props.newsData)}
        >
          <Text style={Styles.categorizedSearchTextStyle}>
            {this.props.newsData.title}
          </Text>
          <Image
            source={{
              uri: this.props.newsData.multimedia[0].url,
            }}
            style={Styles.categorizedSearchImageStyle}
          ></Image>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={Styles.cardContainerStyle}
          onPress={() => this.customSearchCardClicked(this.props.newsData)}
        >
          <Text style={Styles.customSearchHeadingStyle}>
            {this.props.newsData.headline.main}
          </Text>
          <Text style={Styles.customSearchDetailStyle}>
            {this.props.newsData.abstract}
          </Text>
        </TouchableOpacity>
      );
    }
  }

  categorizedSearchCardClicked = (cardData) => {
    this.props.navigationProp.navigate("CategorizedNewsDetail", {
      newsDetail: cardData,
    });
  };

  customSearchCardClicked = (cardData) => {
    this.props.navigationProp.navigate("CustomNewsDetail", {
      newsDetail: cardData,
    });
  };
}

const Styles = StyleSheet.create({
  cardContainerStyle: {
    padding: 0,
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#ffffff",
    width: "96%",
    alignSelf: "center",
    marginVertical: 5,
  },
  categorizedSearchTextStyle: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  categorizedSearchImageStyle: {
    marginBottom: -1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: -1,
    backgroundColor: "#f1eff0",
    height: 145,
    width: "100.5%",
  },
  customSearchHeadingStyle: {
    paddingHorizontal: 20,
    paddingTop: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  customSearchDetailStyle: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    textAlign: "justify",
    paddingTop: 5,
  },
});

export default NewsCard;
