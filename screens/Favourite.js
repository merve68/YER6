import React from "react";
import {View,Text,TextInput,Image,TouchableOpacity} from "react-native";
import { icons } from "../contans";


const Favourite = ({navigation}) =>{
    return(
        <View style={{
            flex:1
        }}>
            <View style={{
                padding:20
            }}>
                <Text style={{
                    color:"#ff4500",fontWeight:"bold",fontSize:20,
                }}>Favorilerim</Text>
            </View>
            <View style={{
            flexDirection:"row",
            alignItems:"center",
            marginHorizontal:20,
            paddingHorizontal:20,
            height:50,
            backgroundColor:"#dddddd",
            borderRadius:10
        }}>
            <Image source={icons.search} style={{
                height:20,
                width:20,
                tintColor:"#gray"
            }} />
            <TextInput style={{
                marginLeft:20,
               
            }} placeholder="Buraya Yazın"
            placeholderTextColor="#gray">

            </TextInput>

        </View>
    
            <View style={{
                alignItems:"center",justifyContent:"center",marginTop:100
            }}>
                <Image source={require("../assets/images/kalp.png")} style={{
                    height:50,
                    width:50
                }}/>
                <View style={{
                    marginTop:40,
                    marginLeft:50,
                    marginRight:50
                }}>
                </View>
            </View>
        </View>
    )
}

export default Favourite;