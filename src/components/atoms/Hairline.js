import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants';

const Hairline = () => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <View
        style={{
          height: 1.5,
          width: '100%',
          backgroundColor: colors.SecondaryButton,
          marginTop: 30,
          opacity: 0.1,
        }}></View>
    </View>
  );
};

export default Hairline;

const styles = StyleSheet.create({});
