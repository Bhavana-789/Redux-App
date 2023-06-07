/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUsername} from '../redux/loginSlice';

const Login = ({navigation}) => {
  const [usernameInput, setUsernameInput] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUsername(usernameInput));
    navigation.navigate('Home');
  };
  return (
    <View style={{flex: 1, padding: 40, backgroundColor: '#f0fff0'}}>
      <SafeAreaView>
        <Text
          style={{
            marginTop: 60,
            color: 'black',
            fontSize: 30,
            padding: 20,
            textAlign: 'center',
          }}>
          Shopping Cart
        </Text>
        <View style={{}}>
          <TextInput
            value={usernameInput}
            onChangeText={text => setUsernameInput(text)}
            style={{
              borderWidth: 1,
              marginBottom: 20,
              height: 40,
              borderRadius: 5,
              paddingLeft: 10,
            }}
            placeholder="Username"
          />
          <TextInput
            style={{
              borderWidth: 1,
              height: 40,
              borderRadius: 5,
              paddingLeft: 10,
            }}
            placeholder="Password"
          />
        </View>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            backgroundColor: '#8fbc8f',
            padding: 10,
            marginTop: 30,
            borderRadius: 8,
          }}
          onPress={handleLogin}>
          <Text style={{fontSize: 17, color: 'black', textAlign: 'center'}}>
            Login
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
export default Login;
