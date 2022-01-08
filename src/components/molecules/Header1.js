import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CrossButton from '../atoms/CrossButton';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const Header1 = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 22,
        paddingTop: 20,
      }}>
      <Text
        style={{
          color: colors.SecondaryButton,
          fontFamily: fonts.IBM_SemiBold,
          fontSize: 22,
          lineHeight: 29,
          letterSpacing: 0,
          textAlign: 'left',
        }}>
        Profile
      </Text>
      {/* 
      <CrossButton /> */}
    </View>
  );
};

export default Header1;

const styles = StyleSheet.create({});
