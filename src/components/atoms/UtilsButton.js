import React, {useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
} from 'react-native';
import {Image} from 'react-native-elements';
import {arrow} from '../../assets/images';

const UtilsButton = ({name}) => {
  const opacity = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      delay: 1300,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <Animated.View
      style={{
        flex: 0.8,
        backgroundColor: 'rgba(101, 15, 92, 0.4)',
        borderRadius: 10.4,
        marginHorizontal: 8,
        opacity: opacity,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        }}>
        <Image source={arrow} style={{height: 11.53, width: 11.53}} />
      </Pressable>
    </Animated.View>
  );
};

export default UtilsButton;

const styles = StyleSheet.create({});
