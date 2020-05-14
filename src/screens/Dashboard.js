/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
//import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import WorldTab from './WorldTab';
import ScienceTab from './ScienceTab';
import SearchTab from './SearchTab';



const dashNavigator = createMaterialTopTabNavigator(
    {
        WorldTab: { 
        screen: WorldTab,
        navigationOptions: {
          title:'World',
        } 
      },
      ScienceTab: { 
        screen: ScienceTab,
        navigationOptions: {
          title:'Science',
        } 
      },
      SearchTab: { 
        screen: SearchTab,
        navigationOptions: {
          title:'Search News',
        }
      },
    },
    {
      initialRouteName: 'WorldTab',
      animationEnabled: true,
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      swipeEnabled: true,
      tabBarOptions: {
        // activeTintColor: '#FFFFFF',
        // inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#b30000',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#FFF',
          borderBottomWidth: 1.5 ,
        },
      },
    }
  );
  dashNavigator.navigationOptions = ({ navigation }) => {
    return {
      title: 'My New Title',
    };
  };
  
  export default createAppContainer(dashNavigator);
  