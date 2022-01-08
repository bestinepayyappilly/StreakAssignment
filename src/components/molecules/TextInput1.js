import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {colors, fonts} from '../../constants';

const TextInput1 = ({label}) => {
  return (
    <View
      style={{
        marginVertical: 10,
        backgroundColor: colors.white,
        paddingHorizontal: 21,
      }}>
      <Text
        style={{
          color: colors.LabelCyan,
          fontFamily: fonts.IBM_SemiBold,
          fontSize: 14,
          lineHeight: 18,
          textAlign: 'left',
        }}>
        {label ? label : 'Enter Label'}
      </Text>
      <View style={{marginTop: 12}}>
        <Input
          placeholder="Jhon"
          placeholderTextColor={colors.placeHolder}
          inputStyle={{
            fontFamily: fonts.IBM_Medium,
            fontSize: 18,
            lineHeight: 24,
            textAlign: 'left',
            opacity: 0.28,
          }}
          containerStyle={{
            borderWidth: 2,
            borderColor: colors.border1,
            height: 50,
            borderRadius: 6,
          }}
          inputContainerStyle={{borderBottomWidth: 0}}
        />
      </View>
    </View>
  );
};

export default TextInput1;

const styles = StyleSheet.create({});
