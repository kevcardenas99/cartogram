import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import LoadScreen from './screens/LoadScreen';

const Stack = createStackNavigator();

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTransparent: true}}>
          <Stack.Screen name='Home' component={Login} options={{title: ''}} />
          <Stack.Screen name='Confirmation' component={LoadScreen} options={{title: ''}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}