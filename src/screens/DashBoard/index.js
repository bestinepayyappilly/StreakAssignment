import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  StatusBar,
  Pressable,
  TouchableOpacity,
  Animated,
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
  settings,
  LandScape,
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
import {Shadow} from 'react-native-neomorph-shadows';
import {useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const index = () => {
  const translateY = new Animated.Value(height * 0.9);
  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      delay: 1500,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);
  const {firstName, secondName, email, number} = useSelector(
    state => state.save,
  );

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
            <Image
              transition={false}
              placeholderStyle={{backgroundColor: 'transparent'}}
              source={Logo1}
              style={{height: 41, width: 39, backgroundColor: 'transparent'}}
            />
            <Pressable>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                  elevation: 5,
                  backgroundColor: 'transparent',
                }}>
                <Shadow
                  inner
                  useArt
                  style={{
                    shadowOffset: {width: 1, height: 2},
                    shadowOpacity: 0.3,
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowRadius: 8,
                    borderRadius: 30,
                    backgroundColor: 'rgba(67, 7, 84, 0.65)',
                    width: 101,
                    height: 37,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    paddingHorizontal: 5,
                  }}>
                  <Image
                    source={Avatar}
                    transition={false}
                    placeholderStyle={{backgroundColor: 'transparent'}}
                    style={{
                      height: 29,
                      width: 29,
                      borderRadius: 15,
                      backgroundColor: 'transparent',
                    }}
                  />

                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={{
                      color: '#fff',
                      fontFamily: fonts.Barlow_SemiBold,
                      fontSize: 16,
                      lineHeight: 19.2,
                      width: '40%',
                      marginHorizontal: 2,
                    }}>
                    {firstName ? firstName : 'Andy'}
                  </Text>
                  <MaterialIcons
                    name="arrow-drop-down"
                    size={20}
                    color="rgba(253, 187, 255, 0.54)"
                  />
                </Shadow>
              </View>
            </Pressable>
          </View>
          <Card1 />
          <View style={styles.buttonContainer}>
            <ScanButton />
            <UtilsButton />
            <UtilsButton2 />
          </View>
        </ImageBackground>
      </View>
      <Animated.View
        style={{marginBottom: 30, transform: [{translateY: translateY}]}}>
        <TransactionsCard />
        <SavingsCard />
        <GameOfTheDayCard />
      </Animated.View>
      <TouchableOpacity
        onPress={() => {
          console.log('ello mate');
        }}
        style={{
          flex: 1,
        }}>
        <View
          style={{
            marginTop: 10,
            alignItems: 'flex-end',
            paddingRight: 12,
            marginBottom: 40,
          }}>
          <Shadow
            inner
            useArt
            style={{
              shadowOffset: {width: 1, height: 2},
              shadowOpacity: 0.1,
              shadowColor: 'rgba(0, 0, 0, 1)',
              shadowRadius: 2,
              borderRadius: 30,
              backgroundColor: 'rgba(229, 229, 229, 0.3)',
              width: 191,
              height: 40,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontFamily: fonts.Barlow_SemiBold,
                fontSize: 16.43,
                lineHeight: 19.71,
                color: 'rgba(141, 141, 141, 0.9)',
              }}>
              Parental controls
            </Text>
            <Image source={settings} style={{height: 21, width: 21}} />
          </Shadow>
        </View>
      </TouchableOpacity>
      <View style={{position: 'absolute', bottom: 0}}>
        <Image
          source={LandScape}
          style={{height: 77, width: 303}}
          resizeMode="contain"
        />
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
