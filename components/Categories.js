import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import {COLORS, images, SIZES, icons, FONTS} from '../contans';
const Categories = () => {
  const featuresData = [
    {
      id: 1,
      icon: icons.indirim,
      description: 'Uygun Fiyat',
    },
    {
      id: 2,
      icon: icons.kargo,
      description: 'Kargo Bedava',
    },
    {
      id: 3,
      icon: icons.uygun,
      description: 'Fırsatlar',
    },
    {
      id: 4,
      icon: icons.guvenli,
      description: 'Güvenli Ödeme',
    },
  ];
  const [features, setFeatures] = React.useState(featuresData);
  function renderFeatures() {
    const Header = () => (
      <View
        style={{
          marginBottom: SIZES.padding * 2,
        
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: 'black',
          }}>
          BookStore' a Özel{' '}
        </Text>
      </View>
    );
    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding * 2,
          width: 60,
          alignItems: 'center',
          borderBottomColor: 'black',
          borderColor: 'black',
          borderRadius: 50,
         

        }}
        onPress={() => console.log(item.description)}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: 40,
            height: 70,
            width: 70,
            marginBottom: 5,
          }}>
          <Image
            source={item.icon}
            style={{
              height: 70,
              width: 70,
              tintColor: item.color,
              borderRadius:30
            }}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            flexWrap: 'wrap',
            fontSize: 10,
            color: 'black',
            fontWeight: 'bold',
          }}>
          {item.description}
        </Text>
      </TouchableOpacity>
    );

    return (
      <FlatList
        ListHeaderComponent={Header}
        data={featuresData}
        keyExtractor={item => `${item.id}`}
        numColumns={4}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        style={{marginTop: SIZES.padding * 2}}
        renderItem={renderItem}
      />
    );
  }
  return (
    <SafeAreaView
      style={{
        marginTop: 70,
      }}>
      {renderFeatures()}
    </SafeAreaView>
  );
};
export default Categories;
