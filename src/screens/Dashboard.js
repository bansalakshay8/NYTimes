/* eslint-disable prettier/prettier */
import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import IconA from "react-native-vector-icons/AntDesign";
import { createAppContainer } from "react-navigation";
//import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { connect } from "react-redux";

import WorldTab from "./WorldTab";
import ScienceTab from "./ScienceTab";
import SearchTab from "./SearchTab";
import { resetLoginAction, loginAction } from "../actions";

const dashNavigator = createMaterialTopTabNavigator(
  {
    WorldTab: {
      screen: WorldTab,
      navigationOptions: {
        title: "World",
      },
    },
    ScienceTab: {
      screen: ScienceTab,
      navigationOptions: {
        title: "Science",
      },
    },
    SearchTab: {
      screen: SearchTab,
      navigationOptions: {
        title: "Search News",
      },
    },
  },
  {
    initialRouteName: "WorldTab",
    animationEnabled: true,
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    swipeEnabled: true,
    headerShown: false,
    tabBarOptions: {
      // activeTintColor: '#FFFFFF',
      // inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: "#b30000",
      },
      labelStyle: {
        textAlign: "center",
      },
      indicatorStyle: {
        borderBottomColor: "#FFF",
        borderBottomWidth: 1.5,
      },
    },
  },
);
dashNavigator.navigationOptions = ({ navigation }) => {
  return {
    // title: "NEW YORK TIMES",
    // headerStyle: {
    //   backgroundColor: "#9a9a9a",
    // },
    // headerTitleAlign: "center",
    // headerRight: ({}) => (
    //   <TouchableOpacity
    //     onPress={() => {
    //       alert("logged out");
    //       // this.props.navigation.goBack();
    //     }}
    //   >
    //     <IconA style={{ marginRight: 10 }} size={15} name={"poweroff"} />
    //   </TouchableOpacity>
    // ),
  };
};

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

const dashboardStack = createStackNavigator({
  dashNavigator: {
    screen: dashNavigator,
    navigationOptions: {
      title: "NEW YORK TIMES",
      headerStyle: {
        backgroundColor: "#9a9a9a",
      },
      headerTitleAlign: "center",
      headerLeft: ()=>{return null},
      headerRight: ({}) => (
        <TouchableOpacity
          onPress={() => {
            alert("logged out");
            // this.props.navigation.goBack();
          }}
        >
          <IconA style={{ marginRight: 10 }} size={15} name={"poweroff"} />
        </TouchableOpacity>
      ),
    },
  },
});

const dashboardStackContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(dashboardStack);
export default dashboardStackContainer;
