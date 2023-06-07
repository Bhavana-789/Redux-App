/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/counterSlice';
const Home = ({navigation}) => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const username = useSelector(state => state.login.username);

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{padding: 30, flex: 1, backgroundColor: '#e0ffff'}}>
      <SafeAreaView>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            marginTop: 30,
            padding: 30,
            textAlign: 'center',
          }}>
          Welcome {username}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              padding: 10,
              width: 100,
              backgroundColor: '#d3d3d3',
            }}
            onPress={() => dispatch(increment())}>
            <Text style={{fontSize: 18, color: 'black'}}>Add Item</Text>
          </TouchableOpacity>
          <Text style={{padding: 10, fontSize: 30, color: 'black'}}>
            {count}
          </Text>
          <TouchableOpacity
            style={{borderWidth: 1, padding: 10, backgroundColor: '#d3d3d3'}}
            onPress={() => dispatch(decrement())}>
            <Text style={{fontSize: 18, color: 'black'}}>Remove Item</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginTop: 280, marginBottom: 40}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              width: 150,
              padding: 8,
              backgroundColor: '#bc8f8f',
            }}
            onPress={handleLogout}>
            <Text style={{color: 'black', fontSize: 20, textAlign: 'center'}}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default Home;
