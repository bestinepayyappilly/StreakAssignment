import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {fonts} from '../../constants';
import {Image} from 'react-native-elements';
const TransactionItem = ({item, key}) => {
  return (
    <View
      key={key}
      style={{
        flex: 1,
        paddingRight: 20,
        paddingBottom: 18,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 18,
        borderBottomColor: 'rgba(204, 170, 207, 0.2)',
        paddingLeft: 14,
        justifyContent: 'space-between',
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            padding: 15,
            backgroundColor: item.bgColor,
            borderWidth: 1,
            borderColor: item.borderColor,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
          }}>
          <Image source={item.icon} style={{height: 22.34, width: 22.34}} />
        </View>
        <View style={{marginHorizontal: 16}}>
          <Text
            style={{
              color: 'rgba(0,0,0,0.9)',
              marginBottom: 4,
              fontFamily: fonts.Barlow_SemiBold,
              fontSize: 18,
              lineHeight: 22,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontFamily: fonts.Barlow_SemiBold,
              fontSize: 14,
              lineHeight: 17,
              color: 'rgba(0, 0, 0, 0.3)',
            }}>
            {item.time}
          </Text>
        </View>
      </View>
      <View style={{flex: 0.5, alignItems: 'flex-end'}}>
        <Text
          style={{
            color:
              item.type === 'deducted'
                ? 'rgba(0, 0, 0, 0.9)'
                : 'rgba(0, 96, 10, 0.9)',
            marginBottom: 4,
            fontFamily: fonts.Barlow_SemiBold,
            fontSize: 18,
            lineHeight: 22,
          }}>
          {item.type === 'deducted'
            ? `${' - ' + '₹' + item.amount}`
            : `${' + ' + '₹' + item.amount}`}
        </Text>
      </View>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({});
