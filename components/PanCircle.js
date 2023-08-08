import {View, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('screen');

const PanCircle = () => {
  console.log({width, height});
  const sharedValueX = useSharedValue(0);
  const sharedValueY = useSharedValue(0);

  const calculateNearestPoint = () => {
    'worklet';
    const x2 = Math.abs(sharedValueX.value);
    const y2 = Math.abs(sharedValueY.value);
    console.log({x2, y2});
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.translationX = sharedValueX.value;
      ctx.translationY = sharedValueY.value;
    },
    onActive: (e, ctx) => {
      sharedValueY.value = ctx.translationY + e.translationY;
      sharedValueX.value = ctx.translationX + e.translationX;
    },
    onEnd: () => {
      console.log(sharedValueX.value, sharedValueY.value);
      calculateNearestPoint();
      if (Math.abs(sharedValueY.value) <= 150)
        sharedValueY.value = withTiming(0, {duration: 300});
    },
  });

  const uas = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: sharedValueY.value},
        {translateX: sharedValueX.value},
      ],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circleWrapper}>
        <GestureHandlerRootView>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.ball, uas]} />
          </PanGestureHandler>
        </GestureHandlerRootView>
      </View>
    </SafeAreaView>
  );
};

export default PanCircle;

const styles = StyleSheet.create({
  ball: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
    borderRadius: 75,
  },
  circleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#6d6dff',
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
