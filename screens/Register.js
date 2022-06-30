import React from "react";
import { View,Text,StatusBar,TextInput,SafeAreaView,TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";




const Register=({navigation})=>{
    return(
     <ScrollView style={{
         flex:1,
         backgroundColor:"black"
     }}>
         <StatusBar animated={true} backgroundColor="#ff4500" />
         <View style={{
             alignItems:"center",
             marginTop:40
         }}>
             <Text style={{
                 color:"white",
                 fontFamily:"RobotoCondensed-LightItalic.ttf",
                 fontSize:25,
                 fontWeight:"bold"
             }}>Kayıt Ol</Text>
         </View>
         <View style={{
             padding:15,
             marginTop:30
             
         }}>
             <View style={{
                 marginTop:10
             }}>
             <Text style={{
                 color:"white",fontSize:15
             }} >Ad *</Text>

             <TextInput style={{
                 height:45,
                 backgroundColor:"white",
                 borderRadius:20,
                 marginTop:5
             }}/>
         </View>
         <View style={{
                 marginTop:10
             }}>
             <Text style={{
                 color:"white",fontSize:15
             }} >Soyad *</Text>

             <TextInput style={{
                 height:45,
                 backgroundColor:"white",
                 borderRadius:20,
                 marginTop:5
             }}/>
         </View>
         <View style={{
                 marginTop:10
             }}>
             <Text style={{
                 color:"white",fontSize:15
             }} >Cep Telefonu *</Text>

             <TextInput style={{
                 height:45,
                 backgroundColor:"white",
                 borderRadius:20,
                 marginTop:5
             }}/>
         </View>
         <View style={{
                 marginTop:10
             }}>
             <Text style={{
                 color:"white",fontSize:15
             }} >E-Mail *</Text>

             <TextInput style={{
                 height:45,
                 backgroundColor:"white",
                 borderRadius:20,
                 marginTop:5
             }}/>
         </View>
         <View style={{
                 marginTop:10
             }}>
             <Text style={{
                 color:"white",fontSize:15
             }} >Şifre *</Text>

             <TextInput style={{
                 height:45,
                 backgroundColor:"white",
                 borderRadius:20,
                 marginTop:5
             }}/>
         </View>
         <View style={{
                 marginTop:10
             }}>
             <Text style={{
                 color:"white",fontSize:15
             }} >Şifre Tekrar *</Text>

             <TextInput style={{
                 height:45,
                 backgroundColor:"white",
                 borderRadius:20,
                 marginTop:5
             }}/>
         </View>
         <View style={{
             marginTop:15
         }}>
             <TouchableOpacity style={{
                 height:45,
                 backgroundColor:"#ff4500",
                 borderRadius:20,
                 alignItems:"center",
                 justifyContent:"center"
             }} onPress={()=>{navigation.navigate("Home")}}>
                 <Text style={{
                     color:"white",
                     fontSize:15,
                     fontWeight:"bold"
                 }}>Kayıt Ol</Text>
             </TouchableOpacity>
         </View>
         </View>
     </ScrollView>
    )
}

export default Register;