import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  handleLogin() {
    if (this.state.name == 'or' && this.state.password == '1234') {
      this.props.navigation.navigate('main');
    }
  }

  onAuthenticationPress() {
    ReactNativeBiometrics.isSensorAvailable().then(resultObject => {
      const {available, biometryType} = resultObject;

      if (available && biometryType === ReactNativeBiometrics.TouchID) {
        console.log('TouchID is supported');
      } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
        console.log('FaceID is supported');
      } else if (
        available &&
        biometryType === ReactNativeBiometrics.Biometrics
      ) {
        console.log('Biometrics is supported');
      } else {
        console.log('Biometrics not supported');
      }
    });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput
          onChangeText={text => {
            this.setState({name: text});
          }}
          style={{alignSelf: 'center', marginTop: 200, color: 'black'}}
          placeholder={'שם משתמש'}
          placeholderTextColor={'black'}
        />
        <TextInput
          onChangeText={text => {
            this.setState({password: text});
          }}
          style={{
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 100,
            color: 'black',
          }}
          placeholder={'סיסמה'}
          placeholderTextColor={'black'}
        />

        <Button onPress={() => this.handleLogin()} title={'log in'} />
        <Button
          title={'biometric authentication'}
          onPress={() => this.onAuthenticationPress()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
