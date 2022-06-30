import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {AuthContext} from '../navigations/AuthProvider';
import {windowHeight} from '../utils/Diemonans';

const Hesap = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View>
      <TouchableOpacity
        style={{
          height: 50,
          margin: 30,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ff4500',
          borderRadius: 20,
          marginTop: 400,
        }}
        onPress={() => logout()}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Hesap;
