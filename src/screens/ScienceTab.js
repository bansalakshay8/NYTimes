/*This file contains view component to display the screen for science tab.*/

import React, { Component } from "react";
import { View, Text, Button, StyleSheet,BackHandler,Alert } from "react-native";
import CatergorizedNews from "../components/CategorizedNews";
import { connect } from "react-redux";
import { resetLoginAction, loginAction } from "../actions";

class ScienceTab extends Component {
  constructor(props) {
    super(props);
    this.state={
      shouldShow: false
    };
  }

  shouldFetchNews=()=>{
    if(this.state.shouldShow){
      return <CatergorizedNews searchTerm="science" navigationProp={this.props.navigation}/>
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
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
      this.setState({
        shouldShow:true
      });
    });
    this.blurListener = navigation.addListener("didBlur", () => {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
      this.setState({
        shouldShow:false
      });
    });
  }
  componentWillUnmount() {
    this.focusListener.remove();
    this.blurListener.remove();
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }


  //function to handle back button click on science tab
  handleBackButtonClick=()=> {
    Alert.alert(  
      'Logout',  
      'Do you want to logout?',  
      [  
          {  
              text: 'Cancel',  
              onPress: () => {return},  
              style: 'cancel',  
          },  
          {text: 'OK', 
            onPress: () => {
              this.props.doLogout();
              this.props.navigation.navigate('Login');
            }
          },  
      ]  
    )
    return true;  
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


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogout: () => {
      dispatch(resetLoginAction());
    },
  };
};

const ScienceTabContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScienceTab);
export default ScienceTabContainer;
