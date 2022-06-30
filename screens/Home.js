import React from 'react';
import HeaderBar from '../components/HeaderBar';
import {SafeAreaView,View,ScrollView} from "react-native"
import Categories from '../components/Categories';
import ProgresBar from '../components/ProgresBar';
import Kampanya from '../components/Kampanya';
import Slider from '../components/Slider';
import Navigator from "../navigation/Navigator"

const Home = () =>{
   return(
       <ScrollView style={{flex:1,backgroundColor:"white"}}>
           <View style={{}}>
                <HeaderBar/>
           </View>
           <View style={{
               marginTop:-250
           }}>
           <Categories/>
           <Slider/>
           <ProgresBar/>
           <Kampanya/>
        
        </View>
       </ScrollView>
   )
}
export default Home;