import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, StatusBar, Image, Button} from 'react-native';
import { Switch } from 'react-native-gesture-handler';

class Conditions extends Component {
  render(){
    return(
      <ImageBackground source={require('../assets/images/carmogramback.png')} style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={{flexDirection: 'column', justifyContent: 'flex-end', padding: 30}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 70}}>
            <Text style={{fontSize: 30}}>First Name: </Text>
            <TextInput style={{width: 200, height: 30, borderWidth:2}}></TextInput>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 70}}>
            <Text style={{fontSize: 30}}>Last Name: </Text>
            <TextInput style={{width: 200, height: 30, borderWidth:2}}></TextInput>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 70}}>
            <Text style={{fontSize: 30}}>Age: </Text>
            <TextInput style={{width: 200, height: 30, borderWidth:2}}></TextInput>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 70}}>
            <Text style={{fontSize: 30}}>Gender: </Text>
            <TextInput style={{width: 200, height: 30, borderWidth:2}}></TextInput>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 70}}>
            <Text style={{fontSize: 30}}>Height: </Text>
            <TextInput style={{width: 200, height: 30, borderWidth:2}}></TextInput>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 70}}>
            <Text style={{fontSize: 30}}>Weight: </Text>
            <TextInput style={{width: 200, height: 30, borderWidth:2}}></TextInput>
          </View>
        </View>
        <Button title="Hi" />
      </ImageBackground>
    );
  }
}

export default Conditions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 50,
    marginBottom:40
  },
  inputView:{
    width:'75%',
    backgroundColor:'#32a8a2',
    borderRadius:25,
    height:60,
    marginBottom:20,
    justifyContent:'center',
    padding:10
  },
  resetPass:{
    fontSize: 16,
    color: '#32a8a2',
    marginBottom: 30
  },
  inputText:{
    fontSize: 20,
    color:'#ffffff',
  },
  butt:{
    width:'35%',
    marginHorizontal: 15,
    backgroundColor:'black',
    borderRadius:20,
    height:60,
    marginBottom:20,
    alignItems:'center',
    justifyContent:'center',
  },
  buttText:{
    fontSize: 30,
    color: 'white'
  },
});

