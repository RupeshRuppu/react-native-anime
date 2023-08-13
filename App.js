import {SafeAreaView} from 'react-native';
import React from 'react';
import Lottie from './components/Lottie';
import FontAwesome from './components/FontAwesome';
import Animated from './components/PanCircle';
import Dominos from './components/Dominos';
import AnimatedRings from './components/AnimatedRings';
import TextInputFocus from './components/TextInputFocus';
import Numberticker from './components/Numberticker';
import BottomSheetCmp from './components/BottomSheetCmp';
import ActivityIndicator from './components/ActivityIndicator';
import Fabs from './components/Fabs';
import CircularProgress from './components/CircularProgress';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Lottie /> */}
      {/* <FontAwesome /> */}
      {/* <AnimatedRings /> */}
      {/* <Dominos /> */}
      {/* <TextInputFocus /> */}
      {/* <Numberticker /> */}
      {/* <BottomSheetCmp /> */}
      {/* <ActivityIndicator /> */}
      {/* <Fabs /> */}
      <CircularProgress />
    </SafeAreaView>
  );
};

export default App;
