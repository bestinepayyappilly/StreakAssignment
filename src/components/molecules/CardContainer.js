import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CardContainer = ({
  children,
  style,
  label,
  labelFontStyle,
  ButtonStyle,
  childrenContainerStyle,
  ButtonLabelStyle,
  iconColor,
  buttonLabel,
}) => {
  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: 20,

          borderRadius: 10,
          borderWidth: 1,
        },
        style,
      ]}>
      <View
        style={{flex: 1, paddingRight: 20, paddingLeft: 14, marginBottom: 12}}>
        <Text
          style={[
            {
              fontFamily: fonts.Barlow_Bold,
              fontSize: 18,
            },
            labelFontStyle,
          ]}>
          {label}
        </Text>
      </View>
      <View style={childrenContainerStyle}>{children}</View>
      <View
        style={[
          {
            flex: 0.5,

            paddingVertical: 20,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            paddingLeft: 14,
            borderTopWidth: 1,
            borderTopColor: 'rgba(204, 170, 207, 0.2)',
            flexDirection: 'row',
            alignItems: 'center',
          },
          ButtonStyle,
        ]}>
        <Text
          style={[
            {fontFamily: fonts.Barlow_Bold, lineHeight: 22, fontSize: 18},
            ButtonLabelStyle,
          ]}>
          {buttonLabel}
        </Text>
        <Ionicons
          name="play"
          size={10}
          color={iconColor}
          style={{marginHorizontal: 4}}
        />
      </View>
    </View>
  );
};

export default CardContainer;

const styles = StyleSheet.create({});
