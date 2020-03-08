import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import LoadScreen from './screens/LoadScreen';
import UserInput from './screens/UserInput';

const Stack = createStackNavigator();

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTransparent: true }}>
          <Stack.Screen name='Home' component={LoadScreen} options={{title: ''}} />
          <Stack.Screen name='Login' component={Login} options={{title: '', headerShown: false}} />
          <Stack.Screen name='Input' component={UserInput} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}