import React from "react";
import {View,Text,Image} from "react-native";

const Kampanya = () =>{
    return(
        <View style={{marginTop:-50}}>
           <View style={{
               alignItems:"center"
           }}>
               <Text style={{
                   color:"black",fontSize:18,fontWeight:"bold"
               }}>Kampanyalarımız</Text>

           </View>
           <View style={{
               height:100,
               backgroundColor:"#cd3700",
               marginTop:20
           }}>
               <Image source={require("../assets/images/11.png")} style={{}}/>

           </View>
        </View>
    )
}

export default Kampanya;