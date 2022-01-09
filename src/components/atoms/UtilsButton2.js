import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UtilsButton2 = () => {
  return (
    <Pressable
      style={{
        flex: 0.6,
        backgroundColor: 'rgba(101, 15, 92, 0.4)',
        borderRadius: 10.4,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
      }}>
      <Ionicons name="ios-ellipsis-horizontal-sharp" size={24} color="#fff" />
    </Pressable>
  );
};

export default UtilsButton2;

const styles = StyleSheet.create({});
