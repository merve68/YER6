import React from 'react';
import { View,Text,StatusBar,Image,TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import { icons } from '../contans';
function renderHeader() {
    return(
        <View style={{
        height:300
        }}>
            <View style={{
                backgroundColor:"#ff4500",
                height:"35%",
                borderBottomLeftRadius:20,
                borderBottomRightRadius:20,
                paddingHorizontal:20
            }}>
              <View style={{
                alignItems:"center",marginTop:-30
              }}>
              <Image source={require("../assets/images/ic_launcher.png")} style={{
                height:150,
                width:150,
                
              }}/></View>

            </View>
            <LinearGradient
        colors={['rgba(0,164,109,0)', 'transparent']}
        style={{
          left: 0,
          right: 0,
          height: 90,
          marginTop: -55,
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
         
        </View>
      </LinearGradient>


         
        </View>
    )
}
const HeaderBar = () =>{
    
    return(
        
        <SafeAreaView style={{
            flex:1
        }}>
        <StatusBar backgroundColor="#ff4500"
          barStyle="light-content"
          />
          {renderHeader()}
          
          </SafeAreaView>
    )
}
export default HeaderBar;
