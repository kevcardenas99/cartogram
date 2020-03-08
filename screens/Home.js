import React from 'react';
import { Text, View, Button, Modal, StyleSheet  } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default function Start(){
  return new App();
}

class App extends React.Component {
  state = {
    modalVisible: false,
  };

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/carmogramback.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text style={{fontSize: 35}}>1 = Satisfactory </Text>
                </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 30}}>
                <Text style={{fontSize: 35}}>2 = Unsatisfactory </Text>
                <Text style={{fontSize: 30}}>How is your physical health?</Text>
                <TextInput style={{width: 300, height: 30, borderWidth:3}}></TextInput>
                </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 80}}>
                <Text style={{fontSize: 30}}>How is your mental health?</Text>
                <TextInput style={{width: 300, height: 30, borderWidth:3}}></TextInput>
                </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 80}}>
                <Text style={{fontSize: 30}}>How is your mood today?</Text>
                <TextInput style={{width: 300, height: 30, borderWidth:3}}></TextInput>
                </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 80}}>
                <Button
                    onPress={() => this.closeModal()}
                    title="Next"
                >
                </Button>
              </View>
            </View>
          </Modal>
          <Button
              onPress={() => this.openModal()}
              title="Start"
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});
