import {View, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Lottie = () => {
  return (
    <View>
      <LottieView
        style={{width: 200, height: 200}}
        source={require('../static/animation1.json')}
        autoPlay
        loop
      />
      <LottieView
        style={{width: 200, height: 200}}
        source={require('../static/animation2.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Lottie;
