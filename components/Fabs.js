import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';

const Fabs = () => {
  const animate = useRef(new Animated.Value(0)).current;
  let open = false;

  const absoluteViewStylesOpacity = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const absoluteViewStylesScale = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            ...styles.button,
            backgroundColor: 'rgba(0,0,0,.1)',
            opacity: absoluteViewStylesOpacity,
            transform: [{scale: absoluteViewStylesScale}],
          },
        ]}
      />

      <TouchableWithoutFeedback>
        <Animated.View
          style={[
            styles.button,
            styles.plus,
            {
              backgroundColor: 'orange',
              opacity: animate.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateY: animate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -70],
                  }),
                },
              ],
            },
          ]}>
          <Text style={[styles.text]}>$</Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <Animated.View
          style={[
            styles.button,
            styles.plus,
            {
              backgroundColor: 'pink',
              opacity: animate.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateY: animate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -140],
                  }),
                },
              ],
            },
          ]}>
          <Text style={[styles.text]}>%</Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          if (open) {
            Animated.spring(animate, {
              toValue: 0,
              useNativeDriver: true,
              duration: 300,
            }).start();
          } else {
            Animated.spring(animate, {
              toValue: 1,
              useNativeDriver: true,
              duration: 300,
            }).start();
          }
          open = !open;
        }}>
        <View style={[styles.button, styles.plus]}>
          <Text style={[styles.text]}>+</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Fabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#22c55e',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
  },
});
