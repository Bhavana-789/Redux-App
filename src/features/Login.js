/* eslint-disable no-alert */
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' && password === '') {
      alert('Please enter username and password');
      return;
    }
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.heading}>Shopping Cart</Text>
        <View>
          <TextInput
            value={username}
            onChangeText={text => setUsername(text)}
            style={styles.inputText}
            placeholder="Username"
          />
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.inputText}
            placeholder="Password"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#f0fff0',
  },
  heading: {
    marginTop: 60,
    color: 'black',
    fontSize: 30,
    padding: 20,
    textAlign: 'center',
  },
  inputText: {
    borderWidth: 1,
    margin: 10,
    height: 40,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    borderWidth: 1,
    backgroundColor: '#8fbc8f',
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
  },
});
export default Login;
