import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, StatusBar, Image} from 'react-native';

class Medications extends Component{
  render(){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(170,255,255)'}}>
        <StatusBar barStyle="dark-content" />
        <ImageBackground source={require('../assets/images/carmogramback.png')} style={{width: '100%', height: '100%'}}>
          <View style={{flex:1, flexDirection: 'column'}}>
            <View style={{flex:2}}></View>
            <View style={{flex: 10, alignItems:'center'}}>
              <TextInput placeholder='Please enter a medication'style={{height: 25, fontSize: 25}}/>
              <View style={{height: 10}}></View>
              <TouchableOpacity style={styles.butt} onPress={() => this.props.navigation.navigate('Input')}>
                <Text style={styles.buttText}>Add</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 6, alignItems: 'center'}}>
              <TouchableOpacity 
              style={{
                width:'35%', 
                backgroundColor:'black', 
                borderRadius:20, height:30, 
                bottom:80,
                position: 'absolute',
                alignItems:'center',
                justifyContent:'center'}} 
                onPress={() => this.props.navigation.navigate('Chart')}>
                <Text style={styles.buttText}>Next</Text>
              </TouchableOpacity>
              </View>
            <View></View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Medications;

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

