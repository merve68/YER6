import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Favourite from "../screens/Favourite";
import Sepet from "../screens/Sepet";
import Account from "../screens/Account";
import { Image } from "react-native";
import { icons } from "../contans";
import TabIcon from "../components/tabIcon";

const Tab = createBottomTabNavigator();

const BottomTabNavigator=({focused})=>{
    return(
        <Tab.Navigator tabBarOptions={{
            style:{
                height:65,
                justifyContent:"center",
                paddingVertical:15,
                backgroundColor:"white",
                elevation:2
            }
        }} >
            <Tab.Screen name="Home" component={Home} 
                
                options={{tabBarLabel:"",
                    tabBarIcon:({focused}) =><TabIcon focused ={focused} icon={icons.home}/>
                }}
                
            />
             <Tab.Screen name="Categories" component={Categories}    options={{tabBarLabel:"",
                    tabBarIcon:({focused}) =><TabIcon focused ={focused} icon={icons.categories}/>
            }}/>
             <Tab.Screen name="Favourite" component={Favourite}  options={{tabBarLabel:"",
                    tabBarIcon:({focused}) =><TabIcon focused ={focused} icon={icons.favourite}/>
                
            }}/>
             <Tab.Screen name="Sepet" component={Sepet}  options={{tabBarLabel:"",
                    tabBarIcon:({focused}) =><TabIcon focused ={focused} icon={icons.sepet}/>
                
            }}/>
             <Tab.Screen name="Account" component={Account}  options={{tabBarLabel:"",
                    tabBarIcon:({focused}) =><TabIcon focused ={focused} icon={icons.profile}/>
                }}/>
        </Tab.Navigator>
    )
}
const Stack = createStackNavigator();
const screenOptionStyle={
    headerShown:false
}
const HomeStackNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>

        </Stack.Navigator>
    )
}
export default HomeStackNavigator;