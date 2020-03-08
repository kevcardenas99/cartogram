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
        <View style={styles.container}>
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text>1=Satisfactory  2=Unsatisfactory</Text>
                <Text>How is your physical health?</Text>
                <Text>How is your mental health?</Text>
                <Text>How is your mood today?</Text>
                <Button
                    onPress={() => this.closeModal()}
                    title="Close"
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
