import React from "react";
import {View,Text,Image,ImageBackground, TouchableOpacity,StatusBar} from "react-native"
import LinearGradient from "react-native-linear-gradient";
import Login from "./Login";
import Register from "./Register"
const First=({navigation})=>{
    return(
        <View style={{
            flex:1,
          
        }}>
             <StatusBar animated={true} backgroundColor="#ff4500" />
            <ImageBackground source={require("../assets/images/first.png")}
         resizeMode="cover"
          style={{
            
            height:"100%",
            width:"100%"
          }}>
           
            
            <View style={{
                flexDirection:"row",
                marginTop:570,
               justifyContent:"center"
    
            }}>
            <TouchableOpacity style={{
                height:50,
                width:150,
                borderRadius:20,
                backgroundColor:"#ff4500",
                alignItems:"center",
                justifyContent:"center",
                borderColor:"white"
                
            }} onPress={()=>{navigation.navigate("Login")}}>
                <Text style={{
                    fontSize:18,color:"white"
                }}>Giriş Yap</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{
                height:50,
                width:150,
                borderRadius:20,
                backgroundColor:"#ff4500",
                alignItems:"center",
                justifyContent:"center",
                borderColor:"white",
                marginLeft:50
                
            }} onPress={()=>{navigation.navigate("Register")}}>
                <Text style={{
                    fontSize:18,color:"white"
                }}>Kayıt Ol</Text>

            </TouchableOpacity>
            </View>
                        
             </ImageBackground>
        </View>
    )
}

export default First;