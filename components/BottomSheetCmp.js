import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Button} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const ITEMS = Array.from({length: 30}, (_, index) => `index-${index}`);

const {width, height} = Dimensions.get('screen');

const renderItem = item => (
  <View key={item}>
    <Text>{item}</Text>
  </View>
);

const App = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['50%', '60%', '70%', '80%'], []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Close Sheet"
        onPress={() => {
          bottomSheetRef.current.close();
        }}
      />
      <Button
        title="Open Sheet"
        onPress={() => {
          bottomSheetRef.current.expand();
        }}
      />
      <Button
        title="Snap to 1(40%)"
        onPress={() => {
          bottomSheetRef.current.snapToPosition('40%');
        }}
      />
      <Button
        title="Collapse"
        onPress={() => {
          bottomSheetRef.current.collapse();
        }}
      />
      <GestureHandlerRootView style={{width, height}}>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backgroundStyle={{
            backgroundColor: '#6d6dff',
            shadowColor: '#6d6dff',
            shadowOffset: {width: 0, height: -10},
            shadowOpacity: 1,
            shadowRadius: 30,
          }}
          handleStyle={{}}
          handleIndicatorStyle={{
            width: 0,
            height: 0,
          }}
          enablePanDownToClose
          //  styles applied to the container of bottom sheet.
          style={{margin: 0}}>
          <BottomSheetScrollView
            scrollEnabled
            contentContainerStyle={{paddingHorizontal: 20}}>
            {ITEMS.map(renderItem)}
          </BottomSheetScrollView>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
