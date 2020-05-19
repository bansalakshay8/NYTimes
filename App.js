/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {View,TouchableOpacity} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Dashboard from "./src/screens/Dashboard";
import CustomNewsDetail from './src/screens/CustomNewsDetail';
import CategorizedNewsDetail from './src/screens/CategorizedNewsDetail';

import Icon from "react-native-vector-icons/AntDesign";
import IconI from "react-native-vector-icons/Ionicons";

const App = createStackNavigator(
  {
    Login: { screen: Login },
    Register : {
      screen: Register,
    },
    Dashboard : {
      screen: Dashboard,
      navigationOptions: { headerShown: false }
    },
    CustomNewsDetail : {
      screen: CustomNewsDetail,
      navigationOptions: {
        title: "NEW YORK TIMES",
        headerStyle: {
          backgroundColor: '#9a9a9a',
        },
        headerTitleAlign:'center',
        headerRight:({}) => (
          <View>
            <Icon style={{marginRight:10 }} size={15} name={'poweroff'}/>
          </View>
        )
      },
    },
    CategorizedNewsDetail : {
      screen: CategorizedNewsDetail,
      navigationOptions: {
        title: "NEW YORK TIMES",
        headerStyle: {
          backgroundColor: '#9a9a9a',
        },
        headerTitleAlign:'center',
      },
    }
  },
  {
    initialRouteName: "Login",
  },
);

export default createAppContainer(App);
