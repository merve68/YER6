import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import First from '../screens/First';
import Login from '../screens/Login';
import Register from '../screens/Register';

import HomeStackNavigator from '../navigation/Navigator';
import Detail from '../screens/Detail';
import productList from '../screens/productList';
import MovieDetail from '../screens/MovieDetail';
import Hesap from "../screens/Hesap";
import {  CartProvider } from "../CartContext.js";
import { Cart } from '../screens/Cart';
import { CartIcon } from '../components/CartIcon';
import Odeme from '../screens/Odeme';
import Kredi from '../screens/Kredi';
const AppStack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);
  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = 'First';
  } else {
    routeName = 'Login';
  }
  return (
    <CartProvider>
      <AppStack.Navigator header="none">
      <AppStack.Screen
        name="First "
        component={First}
        options={{header: () => null}}
      />
      <AppStack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <AppStack.Screen name="Register" component={Register} />

      <AppStack.Screen name="Home" component={HomeStackNavigator} />

      <AppStack.Screen name="Detail" component={Detail} />
      <AppStack.Screen name="productList" component={productList}  options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation}/>})}  />
      <AppStack.Screen name="MovieDetail" component={MovieDetail}  options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation}/>})}  />
      <AppStack.Screen name="Hesap" component={Hesap} />
      <AppStack.Screen name='Cart' component={Cart} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})}   />
      <AppStack.Screen name='Odeme' component={Odeme} />
      <AppStack.Screen name='Kredi' component={Kredi} />
     
    </AppStack.Navigator>
    </CartProvider>
  );
};

export default AuthStack;
