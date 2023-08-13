import {View, TextInput, StyleSheet} from 'react-native';
import React, {useRef} from 'react';

const TextInputFocus = () => {
  const lastNameRef = useRef(TextInput.prototype);

  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 5}}>
      <TextInput
        style={styles.textinput}
        placeholder="Firstname"
        returnKeyType="next"
        onSubmitEditing={() => {
          lastNameRef.current.focus();
        }}
        blurOnSubmit={false}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Lastname"
        ref={lastNameRef}
      />
    </View>
  );
};

export default TextInputFocus;
const styles = StyleSheet.create({
  textinput: {
    width: 300,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#ccc',
    paddingHorizontal: 12,
    color: '#121212',
  },
});
