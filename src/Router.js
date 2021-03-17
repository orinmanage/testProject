import React, {Component} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginSceen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';

export default class Router extends Component {
  AppNavigation = createStackNavigator();

  render() {
    return (
      <NavigationContainer>
        <this.AppNavigation.Navigator initialRouteName={'login'}>
          <this.AppNavigation.Screen name={'login'} component={LoginSceen} />
          <this.AppNavigation.Screen name={'main'} component={MainScreen} />
        </this.AppNavigation.Navigator>
      </NavigationContainer>
    );
  }
}
