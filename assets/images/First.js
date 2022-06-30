import React from "react";
import {View,Text,Image,ImageBackground, TouchableOpacity,StatusBar} from "react-native"
import LinearGradient from "react-native-linear-gradient";
import Login from "./Login";
import Register from "./Register"
const First=({navigation})=>{
    return(
        <View style={{
            flex:1,
            alignItems:"center"
        }}>
             <StatusBar animated={true} backgroundColor="#053d82" />
            <ImageBackground source={require("../assets/images/first.png")}
          resizeMode="cover"
            style={{
                height:400,
                width:"100%"
            }}
            />
            
            
               <View style={{
                   flexDirection:"row",
                   margin:15,
                   marginTop:120                  
                   
               }}>
                  
                   <TouchableOpacity style={{
                       borderRadius:20,
                       borderColor:"black",
                       height:40,
                       borderWidth:1,
                       alignItems:"center",
                       justifyContent:"center",
                       paddingHorizontal:15

                   }} onPress={()=>navigation.navigate("Login")}>
                       <Text style={{
                            fontSize:16,
                            fontWeight:"bold"
                        }}>Giriş Yap</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={{
                       borderRadius:20,
                       borderColor:"black",
                       height:40,
                       borderWidth:1,
                       alignItems:"center",
                       justifyContent:"center",
                       paddingHorizontal:15,
                       marginLeft:100

                   }}onPress={()=>navigation.navigate("Register")}>
                        <Text style={{
                            fontSize:16,
                            fontWeight:"bold"
                        }}>Kayıt Ol</Text>
                   </TouchableOpacity>
               </View>

         
           
        </View>
    )
}

export default First;