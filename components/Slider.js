import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const images = [
  
  require('../assets/images/10.jpg'),
  require('../assets/images/kitap.jpg'),

 
];

const Slider = () => {
  return (
    <SafeAreaView>
      <SliderBox images={images} dotColor={'#ff4500'} autoplay />
    </SafeAreaView>
  );
};
export default Slider;
