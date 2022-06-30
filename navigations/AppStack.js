import React from "react";
import { View,Text } from "react-native";
import HomeStackNavigator from "../navigation/Navigator";
import Home from "../screens/Home";



export default class AppStack extends React.Component{
    render(){
        return(
           <Home/>
        )
    }
}