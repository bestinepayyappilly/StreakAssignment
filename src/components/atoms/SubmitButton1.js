import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {colors, fonts} from '../../constants';

const SubmitButton1 = () => {
  return (
    <View
      style={{
        flex: 1,

        justifyContent: 'flex-end',
        marginBottom: 36,
        paddingHorizontal: 22,
      }}>
      <Pressable
        style={{
          height: 56,
          width: '100%',
          backgroundColor: colors.SecondaryButton,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: fonts.IBM_SemiBold,
            fontStyle: 'normal',
            color: '#fff',
            fontSize: 20,
          }}>
          Create Profile
        </Text>
      </Pressable>
    </View>
  );
};

export default SubmitButton1;

const styles = StyleSheet.create({});
