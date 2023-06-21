/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from '../redux/userSlice';
const Home = () => {
  const users = useSelector(state => state.users.users);
  const loader = useSelector(state => state.users.loading);
  const dispatch = useDispatch();
  const userCard = ({item, index}) => {
    return (
      <View style={styles.userCard} key={index}>
        <Image
          style={styles.userImg}
          resizeMode="contain"
          source={{uri: item?.image}}
        />
        <Text
          style={
            styles.username
          }>{`${item?.firstName} ${item?.lastName}`}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={users}
        renderItem={userCard}
        ListFooterComponent={
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(fetchUsers())}>
            <Text>Add users</Text>
          </TouchableOpacity>
        }
      />

      {loader && <ActivityIndicator size={'large'} />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  userCard: {
    width: '100%',
    height: 70,
    backgroundColor: '#8fbc8f',
    margin: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userImg: {
    width: 70,
    height: 70,
  },
  username: {
    marginLeft: 10,
  },
  button: {
    width: '50%',
    height: 35,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
});
export default Home;
