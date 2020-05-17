import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button,Linking  } from "react-native";

class CategorizedNewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: {},
    };
  }
  render() {
    const { newsData } = this.state;
    if (Object.keys(newsData).length != 0) {   
      return (
        <View style={Styles.container}>
          <Text style={Styles.headerStyle}>{newsData.title}</Text>
          {newsData.byline != "" && (
            <Text style={Styles.byStyle}>{newsData.byline}</Text>
          )}
          <Text style={Styles.abstractStyle}>{newsData.abstract}</Text>
          {newsData.multimedia[0] !=undefined && (<Image
            source={{
              uri: newsData.multimedia[0].url,
            }}
            style={Styles.imageStyle}
          ></Image>)}
          {newsData.multimedia[0] !=undefined && (<Text style={Styles.imgCaption}>{newsData.multimedia[0].caption}</Text>)}
          <View style={Styles.btnStyle}>
            <Button color='#b30000' title="READ FULL ARTICLE" onPress={()=>this.readFullClicked(newsData.url)}></Button>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }

  readFullClicked=(url)=>{
    Linking.openURL(url)
  }
  componentDidMount() {
    this.setState({
      newsData: this.props.navigation.getParam("newsDetail"),
    });
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "flex-end",
    margin: 16,
  },
  headerStyle: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageStyle: {
    marginBottom: -1,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    marginLeft: -1,
    backgroundColor: "#f1eff0",
    height: 200,
    width: '100%',
    marginTop:10
  },
  abstractStyle: {
    marginTop: 15,
    textAlign:'justify'
  },
  byStyle: {
    textAlign: "left",
    fontSize: 11,
    marginTop: 5,
    fontStyle: "italic",
  },
  btnStyle:{
      alignSelf:'center',
      marginTop:15
  },
  imgCaption:{
    alignSelf: "center",
    fontSize: 11,
    marginTop: 5,
    textAlign:'center'
    // fontStyle: "italic",
  }
});

export default CategorizedNewsDetail;
