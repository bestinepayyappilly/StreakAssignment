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
  SavingsCard,
  GameOfTheDayCard,
} from '../../components';
import {colors, fonts} from '../../constants';
const {height, width} = Dimensions.get('screen');

const index = () => {
  console.log(StatusBar.currentHeight);

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
      <View style={{marginBottom: 30}}>
        <TransactionsCard />
        <SavingsCard />
        <GameOfTheDayCard />
      </View>
      {/* <View style={{position: 'absolute', bottom: 0}}>
        <Image source={FoodIcon} style={{height: 100, width: 100}} />
      </View> */}
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
