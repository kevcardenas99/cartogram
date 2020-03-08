import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground} from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./cartogram/assets/images/carmogramback.png')} style={styles.container}>
      <Text style={styles.logo}>CARMOGRAM</Text>
      <View style={styles.inputView}>
        <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
           />
      </View>
      <View style={styles.inputView}>
        <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.resetPass}>Reset Password</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row' }}>
        <TouchableOpacity style={styles.butt}>
          <Text style={styles.buttText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.butt}>
          <Text style={styles.buttText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

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
    color,
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
    backgroundColor:'#e61717',
    borderRadius:20,
    height:60,
    marginBottom:20,
    alignItems:'center',
    justifyContent:'center',
  },
  buttText:{
    fontSize: 15,
    color: '#32a8a2'
  },
});

