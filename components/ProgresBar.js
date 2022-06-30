import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
 
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from '../contans';

const ProgresBar = ({navigation}) => {
  return (
    <View
      style={{
        
      }}>
        <View style={{
          flexDirection:"row",
          marginTop:20
        }}>
        <Text style={{
          color:"black",fontWeight:"bold",fontSize:18,alignItems:"center",marginLeft:20
        }}>Yeni Basımlar</Text>
        <Image source={icons.right} style={{height:20,width:20,marginLeft:250}}/>

        </View>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        style={{height:400,}}>
        <LinearGradient
          colors={['transparent', '#ff7f50']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: 200,
           marginTop:100,
            top: 0,
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail')}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: '#fff',
            marginLeft: 20,
            marginRight:10,
            marginTop: 20,
           borderRadius:15,
            marginBottom: 10,
            width: 160,
            
          }}>
          <Image source={require('../assets/images/1.jpg')} style={{height:250,width:180, borderRadius:20,resizeMode:"contain"}} />
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              paddingHorizontal: 10,
            
            }}>
            <Text
              style={{
                color:"white",
                fontWeight: 'bold',
              }}>
              PSİKOLOJİ
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                paddingLeft: 35,
              }}>
              $400
            </Text>
          </View>
         
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail')}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: '#fff',
            marginLeft: 20,
            marginTop: 20,
            marginRight:10,
            borderRadius: 30,
            marginBottom: 10,
            width: 160,
          }}>
          <Image source={require('../assets/images/2.jpg')} style={{height:250,width:180,borderRadius:20,resizeMode:"contain"}} />
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color:"white"
              }}>
              BİLİM
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                paddingLeft: 35,
              }}>
              $400
            </Text>
          </View>
         
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail')}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: '#fff',
            marginLeft: 20,
            marginTop: 20,
            marginRight:10,
            borderRadius: 15,
            marginBottom: 10,
            width: 160,
          }}>
          <Image source={require('../assets/images/3.jpg')} style={{height:250,width:180,borderRadius:20,resizeMode:"contain"}}/>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color:"white"
              }}>
              SOSYOLOJİ
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                paddingLeft: 35,
              }}>
              $400
            </Text>
          </View>
         
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail')}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: '#fff',
            marginLeft: 20,
            marginTop: 20,
            marginRight:10,
            borderRadius: 15,
            marginBottom: 10,
            width: 160,
          }}>
          <Image source={require('../assets/images/5.jpg')} style={{height:250,width:180,borderRadius:20,resizeMode:"contain"}}/>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontWeight: 'bold',color: 'white',
              }}>
              SİNEMA
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                paddingLeft: 35,
              }}>
              $400
            </Text>
          </View>
         
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail')}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: '#fff',
            marginLeft: 20,
            marginRight:10,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 160,
          }}>
          <Image source={require('../assets/images/4.jpg')} style={{height:250,width:180,borderRadius:20,resizeMode:"contain"}}/>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontWeight: 'bold',color: 'white',
              }}>
              MATEMATİK
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                paddingLeft: 35,
              }}>
              $400
            </Text>
          </View>
         
        </TouchableOpacity>
      </ScrollView>
      
    </View>
  );
};
export default ProgresBar;
