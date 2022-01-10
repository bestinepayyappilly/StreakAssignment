import React from 'react';
import {StyleSheet, View} from 'react-native';
import CardContainer from '../molecules/CardContainer';
import {FoodIcon, DocumentIcon, CreditedIcon} from '../../assets/images';
import TransactionItem from '../atoms/TransactionItem';

const RecentTranscations = [
  {
    title: 'Food & Drinks',
    time: '02:30 pm',
    amount: '50',
    type: 'deducted',
    icon: FoodIcon,
    id: 1,
    bgColor: 'rgba(237, 224, 255, 0.7)',
    borderColor: 'rgba(187, 151, 244, 0.35)',
  },
  {
    title: 'Store Sale',
    time: 'Jun - 4:30 PM',
    amount: '140',
    type: 'deducted',
    icon: DocumentIcon,
    id: 2,
    bgColor: 'rgba(215, 236, 243,0.7)',
    borderColor: 'rgba(151, 222, 244, 0.35)',
  },
  {
    title: 'Food & Drinks',
    time: 'Jun - 12:30 PM',
    amount: '4500',
    type: 'credited',
    icon: CreditedIcon,
    id: 3,
    bgColor: 'rgba(244, 231, 182, 0.7)',
    borderColor: 'rgba(244, 218, 151, 0.35)',
  },
];
const TransactionsCard = () => {
  return (
    <CardContainer
      style={{
        backgroundColor: '#F8F5FB',
        borderColor: 'rgba(204, 170, 207, 0.2)',
      }}
      labelFontStyle={{color: '#600063'}}
      label="Recent Transactions"
      ButtonStyle={{backgroundColor: 'rgba(234, 225, 242, 0.45)'}}
      ButtonLabelStyle={{color: 'rgba(166, 85, 168, 0.9)'}}
      iconColor="rgba(166, 85, 168, 0.9)"
      buttonLabel="All Transactions">
      {RecentTranscations.map(items => {
        return (
          <View key={items.id} style={{flex: 1}}>
            <TransactionItem item={items} />
          </View>
        );
      })}
    </CardContainer>
  );
};

export default TransactionsCard;
