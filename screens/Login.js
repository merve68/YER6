import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../navigations/AuthProvider';
import FormInput from '../components/FormInput';

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const {login} = useContext(AuthContext);
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar animated={true} backgroundColor="#ff4500" />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="E-Posta"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <View style={{marginTop: -190}}>
          <FormInput
            labelValue={password}
            onChangeText={userPassword => setPassword(userPassword)}
            placeholderText="Şifre"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            alignItems: 'center',
            width: '85%',
          }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              backgroundColor: '#ff4500',
            }}   onPress={() =>navigation.navigate("Home")}
            >
            <Text
              style={{
                color: 'white',
                fontSize: 18,
              }}>
              Giriş
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: 30,
        }}>
        <TouchableOpacity
          style={{alignItems: 'flex-end', width: '85%'}}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 15,
            }}>
            Şifremi Unuttum
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 75,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 15}}>
          Bir hesabınız yok mu?{' '}
        </Text>

        <TouchableOpacity>
          <Text
            style={{color: '#ff4500', fontSize: 15}}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            Kayıt Ol
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;
