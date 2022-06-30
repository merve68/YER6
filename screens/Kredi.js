import React from "react";
import {View,Text, SafeAreaView, TouchableOpacity} from "react-native"
import {CreditCardInput } from "react-native-credit-card-input"

const Kredi = ({navigation}) =>{
    return(
       <SafeAreaView style={{}}>
        <CreditCardInput autoFocus={true} />

        <TouchableOpacity style={{
            marginTop:120,
            alignItems:"center",
            justifyContent:"center",
            height:50,
            width:300,
            backgroundColor:"#ff4500",
            borderRadius:20,
            marginLeft:60
        }} onPress={()=>navigation.navigate("Home")}>
            <Text style={{
                fontSize:18,
                fontWeight:"bold"
            }}>Siparişi Tamamla</Text>
        </TouchableOpacity>
       </SafeAreaView>
    )
}

export default Kredi;