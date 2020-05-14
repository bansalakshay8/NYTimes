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

const App = createStackNavigator(
  {
    Login: { screen: Login },
    Register : {screen: Register}
  },
  {
    initialRouteName: "Login",
  },
);

export default createAppContainer(App);
