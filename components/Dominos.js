import {View, Dimensions, Text, ScrollView} from 'react-native';
import {useState} from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import FontAwesomeIcon, {RegularIcons} from 'react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');
const IMAGE_HEIGHT = height * 0.45;

const Dominos = () => {
  const translateY = useSharedValue(0);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.translateY = translateY.value;
    },
    onActive: (e, ctx) => {
      translateY.value = ctx.translateY + e.translationY;
    },
    onEnd: _ => {
      console.log(translateY.value);
      if (Math.abs(translateY.value) <= 70) {
        translateY.value = withTiming(0, {duration: 200});
      } else {
        /* update scrollViewState JS event */
        runOnJS(setScrollEnabled)(true);
      }
    },
  });

  const styles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const imageStyles = useAnimatedStyle(() => {
    return {
      height: interpolate(translateY.value, [-150, 0], [50, IMAGE_HEIGHT], {
        extrapolateLeft: Extrapolate.CLAMP,
        extrapolateRight: Extrapolate.CLAMP,
      }),
    };
  });

  return (
    <View style={{width, height}}>
      <GestureHandlerRootView>
        <PanGestureHandler
          failOffsetY={[-10, 0]}
          onGestureEvent={gestureHandler}>
          <Animated.View style={[styles]}>
            <Animated.Image
              source={{
                uri: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800',
              }}
              style={[{width, resizeMode: 'cover'}, imageStyles]}
            />
            <View
              style={{
                position: 'absolute',
                top: 12,
                right: 15,
              }}>
              <FontAwesomeIcon
                style={{fontSize: 30, color: '#FFF'}}
                icon={RegularIcons.windowClose}
              />
            </View>

            <LinearGradient
              colors={[
                'rgba(0,0,0,.003)',
                'rgba(0,0,0,.1)',
                'rgba(0,0,0,.2)',
                'rgba(0,0,0,.3)',
                'rgba(0,0,0,.3)',
                'rgba(0,0,0,.3)',
                'rgba(0,0,0,.4)',
                'rgba(0,0,0,.5)',
                'rgba(0,0,0,.6)',
                'rgba(0,0,0,.7)',
                'rgba(0,0,0,.7)',
                'rgba(0,0,0,.8)',
                'rgba(0,0,0,.9)',
              ]}
              style={{
                position: 'absolute',
                bottom: 0,
                paddingHorizontal: 10,
                height: 100,
                justifyContent: 'flex-end',
                width,
                paddingBottom: 14,
                gap: 2,
              }}>
              <Text style={{color: '#FFF', fontSize: 22, fontWeight: '600'}}>
                Peppy Panner
              </Text>
              <Text style={{color: '#FFF', fontSize: 14, fontWeight: '400'}}>
                Flavorful trio of juicy paneer, crisp capsicum with spicy red
                paprika
              </Text>
            </LinearGradient>
            <ScrollView
              scrollEnabled={scrollEnabled}
              contentContainerStyle={{
                paddingHorizontal: 20,
                paddingBottom: 30,
                paddingTop: 20,
              }}
              showsVerticalScrollIndicator={false}>
              <View>
                <Text>Change Size</Text>
                {Array.from({length: 30}, (_, idx) => (
                  <View
                    key={idx}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 10,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: 16,
                          borderWidth: 1,
                          borderColor: '#444',
                        }}
                      />
                      <Text style={{fontSize: 16}}>Regular Services - 01</Text>
                    </View>
                    <Text>₹ 290</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
};

export default Dominos;
