import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-elements';
import {arrow} from '../../assets/images';

const UtilsButton = ({name}) => {
  return (
    <Pressable
      style={{
        flex: 0.8,
        backgroundColor: 'rgba(101, 15, 92, 0.4)',
        borderRadius: 10.4,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }}>
      <Image source={arrow} style={{height: 11.53, width: 11.53}} />
    </Pressable>
  );
};

export default UtilsButton;

const styles = StyleSheet.create({});
