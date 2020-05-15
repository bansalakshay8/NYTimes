import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CatergorizedNews from "../components/CategorizedNews";

class WorldTab extends Component {
  constructor(props) {
    super(props);
    this.state={
      shouldShow: false
    };
  }

  shouldFetchNews=()=>{
    if(this.state.shouldShow){
      return <CatergorizedNews searchTerm="world"/>
    }
  } 

  render(){
    return (
      <View style={styles.container}>
        {this.shouldFetchNews()}
      </View>
    )
  }
  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      this.setState({
        shouldShow:true
      });
    });
    this.blurListener = navigation.addListener("didBlur", () => {
      this.setState({
        shouldShow:false
      });
    });
  }
  componentWillUnmount() {
    this.focusListener.remove();
    this.blurListener.remove();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9a9a9a",
  },
});

export default WorldTab;
