/*This file contains view component to display the screen for news details
in case of categorized news.*/

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Linking,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { fetchCommentAction, resetCommentAction } from "../actions";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconA from "react-native-vector-icons/AntDesign";
import CommentsList from "../components/CommentsList";

class CategorizedNewsDetail extends Component {
  // logoutClicked=()=>{
  //   alert("LOGOUT clicked")
  // }

  static navigationOptions = {
    headerRight: ({}) => (
      <TouchableOpacity>
        <IconA style={{ marginRight: 10 }} size={15} name={"poweroff"} />
      </TouchableOpacity>
    ),
  };

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
        <ScrollView contentContainerStyle={Styles.container}>
          <Text style={Styles.headerStyle}>{newsData.title}</Text>
          {newsData.byline != "" && (
            <Text style={Styles.byStyle}>{newsData.byline}</Text>
          )}
          <Text style={Styles.abstractStyle}>{newsData.abstract}</Text>
          {newsData.multimedia[0] != undefined && (
            <Image
              source={{
                uri: newsData.multimedia[0].url,
              }}
              style={Styles.imageStyle}
            ></Image>
          )}
          {newsData.multimedia[0] != undefined && (
            <Text style={Styles.imgCaption}>
              {newsData.multimedia[0].caption}
            </Text>
          )}
          <View style={Styles.btnStyle}>
            <Button
              color="#b30000"
              title="READ FULL ARTICLE"
              onPress={() => this.readFullClicked(newsData.url)}
            ></Button>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginTop: 8,
            }}
          />
          {this.renderComments()}
        </ScrollView>
      );
    } else {
      return null;
    }
  }
//function to render comments
  renderComments = () => {
    const {
      commentsError,
      commentsResult,
      commentsCompleted,
      commentsSearching,
    } = this.props;
    if (commentsSearching == true && commentsCompleted == false) {
      return (
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <ActivityIndicator size="large" color="#b30000" />
          <Text style={{ color: "#b30000" }}>Fetching comments</Text>
        </View>
      );
    } else if (
      commentsSearching == false &&
      commentsCompleted &&
      commentsError == "" &&
      commentsResult.length > 0
    ) {
      return <CommentsList commentsData={commentsResult} />;
    } else if (
      commentsSearching == false &&
      commentsCompleted == true &&
      commentsError != ""
    ) {
      return (
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Icon name="error-outline" size={16} color="black" />
          <Text>{commentsError}</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Text style={{ color: "#b30000" }}>No comments</Text>
        </View>
      );
    }
  };

  //function when user clicks on "read full news"
  readFullClicked = (url) => {
    Linking.openURL(url);
  };
  componentDidMount() {
    this.setState(
      {
        newsData: this.props.navigation.getParam("newsDetail"),
      },
      () => {
        this.props.fetchComments({ newsURL: this.state.newsData.url });
      },
    );
  }
  componentWillUnmount() {
    this.props.resetComments();
  }
}

const Styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "flex-end",
    margin: 16,
    paddingBottom: 20,
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
    width: "100%",
    marginTop: 10,
  },
  abstractStyle: {
    marginTop: 15,
    textAlign: "justify",
  },
  byStyle: {
    textAlign: "right",
    fontSize: 11,
    marginTop: 5,
    fontStyle: "italic",
  },
  btnStyle: {
    alignSelf: "center",
    marginTop: 15,
  },
  imgCaption: {
    alignSelf: "center",
    fontSize: 11,
    marginTop: 5,
    textAlign: "center",
    // fontStyle: "italic",
  },
});

const mapStateToProps = (state) => {
  return {
    commentsError: state.commentReducer.commentsError,
    commentsResult: state.commentReducer.commentsResult,
    commentsCompleted: state.commentReducer.commentsCompleted,
    commentsSearching: state.commentReducer.commentsSearching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (searchObject) => {
      dispatch(fetchCommentAction(searchObject));
    },
    resetComments: () => {
      dispatch(resetCommentAction());
    },
  };
};

const CategorizedNewsDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategorizedNewsDetail);
export default CategorizedNewsDetailContainer;
