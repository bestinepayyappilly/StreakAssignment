import React, {useEffect} from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';
import {colors, fonts} from '../../constants';
import {scan} from '../../assets/images';

const ScanButton = () => {
  const opacity = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      delay: 1000,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <Animated.View
      style={{
        flex: 2,
        backgroundColor: 'rgba(101, 15, 92, 1)',
        borderRadius: 10,
        opacity: opacity,
      }}>
      <Pressable
        style={{
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          padding: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.Barlow_SemiBold,
            fontSize: 18,
            lineHeight: 22,
            color: colors.white,
          }}>
          Scan Code
        </Text>
        <View
          style={{
            height: 35,
            width: 35,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={scan} style={{height: 14.44, width: 13.81}} />
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default ScanButton;

const styles = StyleSheet.create({});
