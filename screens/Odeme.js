import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Odeme = ({navigation}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:100
      }}>
      <View style={{
        marginTop:30
      }}>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: '#ff4500',
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }} onPress={()=>navigation.navigate("Kredi")}>
          <Text style={{
            fontSize:18,
            fontWeight:"bold"
          }}>Kredi Kartı İle Ödeme</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        marginTop:30
      }}>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: '#ff4500',
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Text style={{
            fontSize:18,
            fontWeight:"bold"
          }}>Kapıda Ödeme</Text>
        </TouchableOpacity>
      </View>


      <View style={{
        marginTop:30
      }}>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: '#ff4500',
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Text style={{
            fontSize:18,
            fontWeight:"bold"
          }}>Taksit İle Ödeme</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Odeme;
