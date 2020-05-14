/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Dashboard from "./src/screens/Dashboard";


const App = createStackNavigator(
  {
    Login: { screen: Login },
    Register : {screen: Register},
    Dashboard : {screen: Dashboard}
  },
  {
    initialRouteName: "Login",
  },
);

export default createAppContainer(App);
