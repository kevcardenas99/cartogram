import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from "./Context";

import Login from './screens/Login';
import LoadScreen from './screens/LoadScreen';

const Stack = createStackNavigator();

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Confirmation" component={LoadScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}