import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {Shadow} from 'react-native-neomorph-shadows';
import {fonts} from '../../constants';

const SaveButton = () => {
  return (
    <Pressable
      onPress={() => {
        console.log('Save button pressed');
      }}
      style={{alignItems: 'center', justifyContent: 'center'}}>
      <Shadow
        inner // <- enable inner shadow
        useArt // <- set this prop to use non-native shadow on ios
        style={{
          shadowOffset: {width: 1, height: 2},
          shadowOpacity: 0.2,
          shadowColor: 'rgba(0, 0, 0, 1)',
          shadowRadius: 3,
          borderRadius: 30,
          backgroundColor: 'rgba(206, 164, 206, 0.2)',
          width: 98,
          height: 32,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 14,
        }}>
        <Text
          style={{
            fontFamily: fonts.IBM_Bold,
            color: '#400142',
            lineHeight: 18.2,
            fontSize: 14,
          }}>
          Save more
        </Text>
      </Shadow>
    </Pressable>
  );
};

export default SaveButton;

const styles = StyleSheet.create({});
