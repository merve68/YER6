import React from "react";
import {View,Text,TouchableOpacity,Image,FlatList,SafeAreaView,ScrollView} from "react-native";




import { icons } from "../contans";



const Account = ({navigation}) =>{
    const data = [{
        id:1,
        name:"Siparişlerim",
        image:require("../assets/account/konum.png")

    },
    
    {
        id:2,
        name:"Adreslerim",
        image:require("../assets/account/konum.png")
    
    },
    {
        id:3,
        name:"Son İncelediğim Ürünler",
        image:require("../assets/account/konum.png")

    },
    {
        id:4,
        name:"Bildirimler",
        image:require("../assets/account/konum.png")

    },
    {
        id:5,
        name:"Fiyat Alarm Listem",
        image:require("../assets/account/konum.png")

    },
    {
        id:6,
        name:"Stok Alarm Listem",
        image:require("../assets/account/konum.png")

    },
    {
        id:7,
        name:"Hediye Çeklerim",
        image:require("../assets/account/konum.png")

    },
    {
        id:8,
        name:"Puanlarım",
        image:require("../assets/account/konum.png")

    },
    {
        id:9,
        name:"Bize Ulaşın",
        image:require("../assets/account/konum.png")

    },
    {
        id:10,
        name:"Uygulama Hakkında",
        image:require("../assets/account/konum.png")

    },
    {
        id:11,
        name:"Çıkış",
        image:require("../assets/account/konum.png")

    }
    ]
    return(
        <ScrollView style={{
            padding:20
        }}>
            <View>
            <Text style={{
                color:"#ff4500",fontWeight:"bold",fontSize:20,
            }}>Hesabım</Text>
            </View>
           
            <View style={{
                marginTop:30,
                flexDirection:"row"
            }}>
                
                <Image source={icons.profile} style={{
                        tintColor:"#ff4500",width:30,height:30

                        
                        
                    }}/>
                <TouchableOpacity style={{
                    flexDirection:"row"
                }}onPress={()=>{navigation.navigate("Hesap")}}>
                    
                    <Text style={{
                        fontWeight:"bold",fontSize:18,marginLeft:40,color:"black"
                    }}>Hesap Ayarları</Text>
                  
               
                </TouchableOpacity>


            </View>
            <View>
                <FlatList
                pagingEnabled
            
                data={data}
                keyExtractor={item=>item.key}
                renderItem={({item,index})=>{
                    return(
                        <SafeAreaView style={{flexDirection:"row",marginTop:20}}>
                            <Image source={item.image} 
                            style={{height:20,width:20, tintColor:"#ff4500",borderRadius:20,marginTop:10}}
                            />
                           <TouchableOpacity>
                           <Text style={{color:"black",fontSize:16}}>{item.name}</Text>
                           </TouchableOpacity>
                           
                        </SafeAreaView>

                    )
                }}
                />
            </View>
 </ScrollView>

    )
}

export default Account;