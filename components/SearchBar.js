import React from "react";
import {View,TextInput,Image} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const SearchBar = () =>{
    return(
        <View>
                    <LinearGradient
        colors={['rgba(0,164,109,0)', 'transparent']}
        style={{
          left: 0,
          right: 0,
          height: 90,
          marginTop: -45,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            paddingVertical: 8,
            paddingHorizontal: 20,
            marginHorizontal: 20,
            borderRadius: 30,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={'#ff4500'}
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              width: 260,
            }}
          />
          <Image
            source={require('../assets/images/3.png')}
            style={{
              height: 20,
              width: 20,
              tintColor:"#ff4500"
            }}
          />
        </View>
      </LinearGradient>
      </View>

    )
}

export default SearchBar;