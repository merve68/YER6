import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,Image, ScrollView, FlatList,Animated, TouchableWithoutFeedback, ImageBackground,StatusBar
} from 'react-native';

import { COLORS, dummyData, FONTS, icons, images, SIZES } from '../contans';


const productList=({navigation})=>{
    const newSeasonScrollX = React.useRef(new Animated.Value(0)).current
    return(
        <ScrollView>
            <View style={{
                marginTop:15
            }}>
               

          
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
         </View>
         <Animated.FlatList
           
               pagingEnabled
               snapToAlignment="center"
               snapToInterval={SIZES.width}
               numColumns={1}
             
               scrollEventThrottle={16}
               decelerationRate={0}
               contentContainerStyle={{
                   marginTop:SIZES.radius
               }}
               data={dummyData.product}
               keyExtractor={item=>{`${item.id}`}}
               onScroll={Animated.event([
                   {nativeEvent : {contentOffset:{x:
                   newSeasonScrollX}}}
               ],{useNativeDriver:false})}
                 renderItem={({item,index})=>{
                    return(
                        <TouchableWithoutFeedback onPress={()=>navigation.navigate("MovieDetail",{selectedMovie:item})}>
                            <View style={{
                                alignItems:"center",
                                justifyContent:"center",
                                width:SIZES.width,
                                marginTop:10
                            }}>
                                <ImageBackground source={item.thumbnail}
                                resizeMode="contain"
                                style={{
                                    justifyContent:"flex-end",
                                    width:SIZES.width*0.85,
                                    height:SIZES.height*0.45
                                }}
                                imageStyle={{borderRadius:40}}
                                >
                                    <View style={{
                                        flexDirection:"row",
                                        width:"100%",
                                       
                                        height:60,
                                        paddingHorizontal:SIZES.radius,
                                        marginBottom:SIZES.radius
                                    }}>
                                        <View style={{
                                            flex:1,
                                            flexDirection:"row",
                                            alignItems:"center"
                                        }}>
                                            <View style={{
                                                height:40,
                                                width:40,
                                                backgroundColor:COLORS.transparentWhite,
                                                borderRadius:20,
                                                alignItems:"center",
                                                justifyContent:"center"
                                            }}>
                                                <Image source={icons.favourite}
                                                resizeMode="contain"
                                                style={{
                                                    height:15,
                                                    width:15,
                                                    tintColor:COLORS.black
                                                }}
                                                />
    
                                            </View>
                                            <Text style={{marginLeft:SIZES.base,color:COLORS.black,...FONTS.h3}}>Favorilere Ekle</Text>
                                            
                                        </View>
                                        {item.stillWatching.length>0 && 
                                        <View style={{
                                            justifyContent:"center"
                                        }}>
                                            
                                            
                                        </View>
                                        }
    
                                    </View>
                                </ImageBackground>
    
                            </View>
                        </TouchableWithoutFeedback>
                    )}}
         />
        </ScrollView>
    )
}
export default productList;