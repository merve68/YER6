import React from "react";
import {View,Text,Image,TextInput,TouchableOpacity} from "react-native";

import { icons } from "../contans";


const Categories = ({navigation}) =>{
    return(
     
        <View style={{
            padding:20
        }}>
            <Text style={{
                color:"#ff4500",fontWeight:"bold",fontSize:20,
            }}>Kategoriler</Text>

        <View style={{
            flexDirection:"row",
            alignItems:"center",
            
            paddingHorizontal:20,
            height:50,
            backgroundColor:"#dddddd",
            borderRadius:10,
            marginTop:20
        }}>
            <Image source={icons.search} style={{
                height:20,
                width:20,
                tintColor:"#black"
            }} />
            <TextInput style={{
                marginLeft:20,
               
            }} placeholder="Buraya Yazın"
            placeholderTextColor="#black">

            </TextInput>

        </View>
        <View style={{
            marginTop:30,
            
        }}>
            <View style={{marginTop:10}}>
            <TouchableOpacity style={{
                borderBottomColor:"black",
                borderBottomWidth:1,
                height:40,
                borderRadius:20,
                
               
            }}onPress={()=>{navigation.navigate("productList")}}>
                <Text>Çocuk Kitapları</Text>
            </TouchableOpacity></View>
            <TouchableOpacity style={{
                borderBottomColor:"black",
                borderBottomWidth:1,
                height:40,
                borderRadius:20,
                
               
            }}onPress={()=>{navigation.navigate("productList")}}>
                <Text>Bilim Kurgu Kitapları</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                borderBottomColor:"black",
                borderBottomWidth:1,
                height:40,
                borderRadius:20,
                
               
            }}onPress={()=>{navigation.navigate("productList")}}>
                <Text>Ütopik Kitapları</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                borderBottomColor:"black",
                borderBottomWidth:1,
                height:40,
                borderRadius:20,
                
               
            }}onPress={()=>{navigation.navigate("productList")}}>
                <Text>Edebiyat Kitapları</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                borderBottomColor:"black",
                borderBottomWidth:1,
                height:40,
                borderRadius:20,
                
               
            }}onPress={()=>{navigation.navigate("productList")}}>
                <Text>Felsefe Kitapları</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                borderBottomColor:"black",
                borderBottomWidth:1,
                height:40,
                borderRadius:20,
                
               
            }}onPress={()=>{navigation.navigate("productList")}}>
                <Text>Çalışma Kitapları</Text>
            </TouchableOpacity>

        </View>
        </View>
        
    )
}

export default Categories;