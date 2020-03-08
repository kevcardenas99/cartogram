import React, {Component, Fragment} from 'react';
import {StyleSheet, Text, View, TextInput, Button, StatusBar,FormLabel,FormInput,FormValidationMesssage,Alert} from 'react-native';
import Form from './form';
export function SampleFunction1(){

    return Alert.alert("Hello world");
    
 
 }

export default function App() {
    return (
      <View style={{ flex: 1, padding: 40}}>
        <Text style={{color: 'black' }}>hello </Text>
         <FormLabel>First name </FormLabel>
          <FormInput onChangeText={SampleFunction1()}/>

      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
