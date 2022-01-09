import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../constants';
import GoalCard from '../atoms/GoalCard';
import CardContainer from '../molecules/CardContainer';

const SavingsCard = () => {
  const [Name, setName] = useState("Andy's");
  return (
    <CardContainer
      style={{
        backgroundColor: 'rgba(245, 247, 251, 1)',
        borderColor: 'rgba(0, 0, 0, 0.08)',
      }}
      label={`${Name}` + `${' '}` + 'Savings'}
      labelFontStyle={{color: 'rgba(17, 40, 84, 1)'}}
      buttonLabel="Add and view goals"
      ButtonLabelStyle={{color: 'rgba(87, 112, 164, 0.9)'}}
      iconColor="rgba(102, 125, 172, 1)"
      ButtonStyle={{backgroundColor: 'rgba(238, 241, 243, 1)'}}>
      <View style={{paddingLeft: 12, paddingRight: 12}}>
        <Text
          style={{
            fontFamily: fonts.Barlow_SemiBold,
            fontSize: 18,
            color: 'rgba(86,	131,	171,0.9)',
          }}>
          Saved a total of{' '}
          <Text style={{color: 'rgba(17, 40, 84, 1)'}}>₹6,480</Text> this month
          {'\n'}
          and is close to achieving one goal
        </Text>
        <View
          style={{
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          <GoalCard />
        </View>
      </View>
    </CardContainer>
  );
};

export default SavingsCard;

const styles = StyleSheet.create({});
