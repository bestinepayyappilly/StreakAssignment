import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {Image} from 'react-native-elements';
import {
  BackGround1,
  Logo1,
  Avatar,
  CardLogo,
  FoodIcon,
  DocumentIcon,
  CreditedIcon,
} from '../../assets/images';
import {
  Card1,
  UtilsButton,
  ScanButton,
  UtilsButton2,
  TransactionsCard,
} from '../../components';
import CardContainer from '../../components/molecules/CardContainer';
import {colors, fonts} from '../../constants';
const {height, width} = Dimensions.get('screen');

const index = () => {
  console.log(StatusBar.currentHeight);
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
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#fff'}}
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <ImageBackground
          source={BackGround1}
          blurRadius={7}
          style={{height: '100%', width: '100%'}}>
          <View style={styles.logoContainer}>
            <Image source={Logo1} style={{height: 41, width: 39}} />
          </View>
          <Card1 />
          <View style={styles.buttonContainer}>
            <ScanButton />
            <UtilsButton />
            <UtilsButton2 />
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 30,
          marginHorizontal: 12,
        }}>
        {/* <SavingsCard/> */}
        {/* <GameOfTheDayCard/> */}
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
          {RecentTranscations.map(e => {
            return (
              <View
                key={e.id}
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
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      backgroundColor: e.bgColor,
                      borderWidth: 1,
                      borderColor: e.borderColor,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 25,
                    }}>
                    <Image
                      source={e.icon}
                      style={{height: 22.34, width: 22.34}}
                    />
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
                      {e.title}
                    </Text>
                    <Text
                      style={{
                        fontFamily: fonts.Barlow_SemiBold,
                        fontSize: 14,
                        lineHeight: 17,
                      }}>
                      {e.time}
                    </Text>
                  </View>
                </View>
                <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                  <Text
                    style={{
                      color:
                        e.type === 'deducted'
                          ? 'rgba(0, 0, 0, 0.9)'
                          : 'rgba(0, 96, 10, 0.9)',
                      marginBottom: 4,
                      fontFamily: fonts.Barlow_SemiBold,
                      fontSize: 18,
                      lineHeight: 22,
                    }}>
                    {e.type === 'deducted'
                      ? `${' - ' + '₹' + e.amount}`
                      : `${' + ' + '₹' + e.amount}`}
                  </Text>
                </View>
              </View>
            );
          })}
        </CardContainer>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  logoContainer: {
    marginTop: 49,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
