/*This file contains view component to display the screen for news details when 
user clicks on any of the search result.*/

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Linking,
  ActivityIndicator,
  ScrollView
} from "react-native";
import { fetchCommentAction, resetCommentAction } from "../actions";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import CommentsList from "../components/CommentsList";

class CustomNewsDetail extends Component {
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
          <Text style={Styles.headerStyle}>{newsData.headline.main}</Text>
          {newsData.byline != undefined && (
            <Text style={Styles.byStyle}>{newsData.byline.original}</Text>
          )}
          {newsData.abstract != "" && (
            <Text style={Styles.abstractStyle}>{newsData.abstract}</Text>
          )}
          {newsData.lead_paragraph != "" && (
            <Text style={Styles.paragraphStyle}>{newsData.lead_paragraph}</Text>
          )}
          <View style={Styles.btnStyle}>
            <Button
              color="#b30000"
              title="READ FULL ARTICLE"
              onPress={() => this.readFullClicked(newsData.web_url)}
            ></Button>
          </View>
          {/* {this.props.fetchComments({newsURL:newsData.web_url})} */}
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

  //function to handle on click on "read full news"
  readFullClicked = (url) => {
    Linking.openURL(url);
  };
  componentDidMount() {
    this.setState(
      {
        newsData: this.props.navigation.getParam("newsDetail"),
      },
      () => {
        this.props.fetchComments({ newsURL: this.state.newsData.web_url });
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
    margin: 16,
  },
  headerStyle: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
  abstractStyle: {
    marginTop: 5,
    textAlign: "justify",
    color: "#585858",
  },
  byStyle: {
    textAlign: "right",
    fontSize: 11,
    marginTop: 5,
    fontStyle: "italic",
  },
  paragraphStyle: {
    marginTop: 15,
    textAlign: "justify",
  },
  btnStyle: {
    alignSelf: "center",
    marginTop: 15,
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

const CustomNewsDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomNewsDetail);
export default CustomNewsDetailContainer;
