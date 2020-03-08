import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, StatusBar, Image} from 'react-native';

class Chart extends Component{
  render(){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(170,255,255)'}}>
        <StatusBar barStyle="dark-content" />
        <ImageBackground source={require('../assets/images/carmogramback.png')} style={{width: '100%', height: '100%'}}>
        <View style={{height: 100}}></View>
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize:60}}>Hello!</Text>
            <View style={{height:5}}></View>
            <Text style={{fontSize:25}}>Our Analysis is ready for you:</Text>
          </View>
          <View style={{padding: 45}}>
            <Text style={{fontSize: 20}}>Recently you have been getting very tired around [time], and based on our records, you are feeling your best on 
              [day(s)] when you are taking [medications]. Your worst days have for the most part been [day(s)], when you are taking
              [medication(s)]. If you are able to take your pills during different times it may result in a much happier lifestyle for
              you! We are not medical professionals but please speak to your PCP about any possibilities, and thank you for using Carmogram!
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Chart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
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
    height:30,
    marginBottom:20,
    alignItems:'center',
    justifyContent:'center',
  },
  buttText:{
    fontSize: 20,
    color: 'white'
  },
});

