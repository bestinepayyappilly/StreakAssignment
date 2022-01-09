import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UtilsButton2 = () => {
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
        flex: 0.6,
        backgroundColor: 'rgba(101, 15, 92, 0.4)',
        borderRadius: 10.4,
        opacity: opacity,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
          paddingHorizontal: 5,
        }}>
        <Ionicons name="ios-ellipsis-horizontal-sharp" size={24} color="#fff" />
      </Pressable>
    </Animated.View>
  );
};

export default UtilsButton2;

const styles = StyleSheet.create({});
