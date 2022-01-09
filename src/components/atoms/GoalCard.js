import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../constants';

const GoalCard = () => {
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.08)',
        borderRadius: 10,
        backgroundColor: colors.white,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
      }}>
      <View
        style={{
          height: 50,
          width: 3,
          backgroundColor: 'rgba(88, 105, 140, 0.3)',
          borderRadius: 10,
        }}
      />
      <View style={{marginHorizontal: 12}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: fonts.Barlow_SemiBold,
            color: 'rgba(49, 68, 107, 0.9)',
            lineHeight: 21.6,
          }}>
          PlayStation 5
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: fonts.Barlow_SemiBold,
            color: 'rgba(49, 68, 107, 0.7)',
            lineHeight: 21.6,
            marginTop: 7.2,
          }}>
          <Text style={{color: 'rgba(17, 40, 84, 1)'}}>₹36,480 saved</Text> of
          ₹40,000 goal
        </Text>
      </View>
    </View>
  );
};

export default GoalCard;

const styles = StyleSheet.create({});
