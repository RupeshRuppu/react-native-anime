import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const range = new Array(10).fill().map((_, i) => i + 1);

const Numberticker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hidden}>
        {range.map(val => (
          <Text style={styles.text} key={val.toString()}>
            {val}
          </Text>
        ))}
      </View>
      <Text style={[styles.text, styles.measure]}>{0}</Text>
    </View>
  );
};

export default Numberticker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 70,
    color: '#333',
    textAlign: 'center',
  },
  hidden: {
    overflow: 'hidden',
  },
  measure: {
    opacity: 0,
  },
});
