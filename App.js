import {SafeAreaView} from 'react-native';
import React from 'react';
import Lottie from './components/Lottie';
import FontAwesome from './components/FontAwesome';
import Animated from './components/PanCircle';
import Dominos from './components/Dominos';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Lottie /> */}
      {/* <FontAwesome /> */}
      {/* <Animated /> */}
      <Dominos />
    </SafeAreaView>
  );
};

export default App;
