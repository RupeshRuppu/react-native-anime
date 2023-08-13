import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const BACKGROUND_COLOR = '#444B6F';
const BACKGROUND_STROKE_COLOR = '#303858';
const STROKE_COLOR = '#A6E1FA';

const CircularProgress = () => {
  return (
    <View style={styles.container}>
      <Text>CircularProgress</Text>
    </View>
  );
};

export default CircularProgress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
});
