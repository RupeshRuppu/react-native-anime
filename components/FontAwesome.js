import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FontAwesomeIcon, {
  BrandIcons,
  RegularIcons,
  SolidIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

const FontAwesome = () => {
  const parsedIcon = parseIconFromClassName('fas fa-code');
  return (
    <View>
      <FontAwesomeIcon style={styles.icon} icon={BrandIcons.android} />
      <FontAwesomeIcon style={styles.icon} icon={RegularIcons.fileCode} />
      <FontAwesomeIcon style={styles.icon} icon={SolidIcons.checkCircle} />
      <FontAwesomeIcon style={styles.icon} icon={parsedIcon} />
    </View>
  );
};

export default FontAwesome;
const styles = StyleSheet.create({
  icon: {
    fontSize: 40,
    color: '#6d6dff',
  },
});
