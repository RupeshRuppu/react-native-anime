import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

const GOOGLE_LOGO_COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];
const data = Array.from({length: 30}, (_, index) => `item-${index}`);
const {width} = Dimensions.get('screen');

const ActivityIndicatorCMP = () => {
  const index = useRef(0);
  const [color, setColor] = useState(GOOGLE_LOGO_COLORS[index.current]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      index.current = index.current === 3 ? 0 : index.current + 1;
      setColor(GOOGLE_LOGO_COLORS[index.current]);
    }, 1500);

    return () => {
      console.log('hello');
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'} style={{padding: 10}} color={color} />
    </View>
  );
};

const renderItem = ({item, index}) => (
  <View
    style={{
      width,
      height: 60,
      padding: 5,
      justifyContent: 'center',
      backgroundColor: index % 2 ? '#CCC' : 'wheat',
    }}>
    <Text style={{fontWeight: '600', fontSize: 20}}>{item}</Text>
  </View>
);

export default function () {
  const [refresh, setRefresh] = useState(false);
  const animate = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.y = animate.value;
    },
    onActive: (e, ctx) => {
      console.log('e', animate.value, 'trans', e.translationY);

      if (animate.value >= 0 && animate.value <= 140)
        animate.value = ctx.y + e.translationY;
    },
    onEnd: () => {
      animate.value = withTiming(0, {duration: 250});
    },
  });

  const uas = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animate.value}],
    };
  });

  const onRefresh = async () => {
    setRefresh(true);
    const res = await new Promise(res => setTimeout(() => res('done'), 2000));
    console.log({res});
    setRefresh(false);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 160,
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: '#6d6dff',
          width,
        }}
      />
      <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[uas]}>
            <FlatList
              data={data}
              keyExtractor={item => item}
              renderItem={renderItem}
              refreshing={refresh}
              onRefresh={onRefresh}
            />
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
}
