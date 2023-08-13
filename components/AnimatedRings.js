import {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const Ring = ({delay}) => {
  const ring = useSharedValue(0);
  const uas = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - ring.value,
      transform: [{scale: interpolate(ring.value, [0.0, 0.8], [0, 3])}],
    };
  });

  useEffect(() => {
    ring.value = withDelay(
      delay,
      withRepeat(withTiming(0.8, {duration: 3000}), -1, true),
    );
  }, []);

  return <Animated.View style={[styles.ring, uas]} />;
};

const AnimatedRings = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {Array.from({length: 4}, (_, index) => index).map(index => (
        <Ring key={index.toString()} delay={index * 600} />
      ))}
    </View>
  );
};

export default AnimatedRings;

const styles = StyleSheet.create({
  ring: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 8,
    borderColor: '#fb923c',
    position: 'absolute',
  },
});
