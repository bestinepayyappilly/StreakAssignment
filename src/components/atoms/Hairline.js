import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Hairline = () => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <View
        style={{
          height: StyleSheet.hairlineWidth,
          width: '100%',
          backgroundColor: '#000',
          marginTop: 30,
        }}></View>
    </View>
  );
};

export default Hairline;

const styles = StyleSheet.create({});
