import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, StatusBar, Image, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoadScreen({navigation}){
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(170,255,255)'}}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={require('./assets/images/carmogramback.png')} style={{width: '100%', height: '100%'}}>
        <View style={{flex:1, flexDirection: 'column'}}>
          <View style={{flex:2}}></View>
          <View style={{flex: 10, alignItems: 'center'}}>
            <Image source={require('./assets/images/carmogramlogo.png')} style={{width: 300, height:323}}/>
          </View>
          <View style={{flex: 6, alignItems: 'center'}}>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 45, width: 250, backgroundColor: 'black', borderRadius: 10}} onPress={}> 
              <Text style={{color: 'white', fontSize: 40}}>Let's Go!</Text>
            </TouchableOpacity>
          </View>
          <View>      
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
