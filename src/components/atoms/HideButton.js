import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {Shadow} from 'react-native-neomorph-shadows';
import {Image} from 'react-native-elements';
import {EyeIcon} from '../../assets/images';

const HideButton = ({onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{position: 'absolute', top: 14, right: 20}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          elevation: 5,
        }}>
        <Shadow
          inner
          useArt
          style={{
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowColor: 'rgba(0, 0, 0, 1)',
            shadowRadius: 2,
            borderRadius: 30,
            backgroundColor: 'rgba(155, 151, 182, 0.1)',
            width: 43.2,
            height: 43.2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={EyeIcon}
            resizeMode="contain"
            style={{height: 24.19, width: 26.2, marginTop: 3}}
          />
        </Shadow>
      </View>
    </Pressable>
  );
};

export default HideButton;

const styles = StyleSheet.create({});
