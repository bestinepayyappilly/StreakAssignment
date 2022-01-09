import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import {CardLogo, EyeIcon} from '../../assets/images';
import {LinearGradient} from 'expo-linear-gradient';
import {fonts} from '../../constants';
import {Shadow} from 'react-native-neomorph-shadows';
import {Image} from 'react-native-elements';
import SaveButton from '../atoms/SaveButton';
import HideButton from '../atoms/HideButton';
const ScreenWidth = Dimensions.get('screen').width;

const Card1 = () => {
  const [hide, setHide] = useState(true);
  const height = new Animated.Value(50);
  const width = new Animated.Value(ScreenWidth - 50);
  const opacity = new Animated.Value(0);
  const handleHide = () => {
    setHide(!hide);
  };
  useEffect(() => {
    Animated.timing(height, {
      toValue: 219.57,
      duration: 200,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
    Animated.timing(width, {
      toValue: ScreenWidth - 24,
      duration: 200,

      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: 500,

      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  }, []);
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 18,
        paddingHorizontal: 12,
      }}>
      <Animated.View
        style={{
          height: height,
          width: width,
          backgroundColor: '#fff',
          borderRadius: 10,
          opacity: opacity,
          elevation: 10,
        }}>
        <View
          style={{
            height: '50%',
            width: '100%',
            backgroundColor: '#fff',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            elevation: 5,
            overflow: 'hidden',
          }}>
          <LinearGradient
            colors={[
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0)',
              'rgba(120, 15, 230, 0.35)',
            ]}
            style={{flex: 1}}
            start={{x: 0.1, y: 0.5}}
            end={{x: 0.9, y: 0.9}}>
            <ImageBackground
              imageStyle={{resizeMode: 'cover'}}
              source={CardLogo}
              style={styles.ImageBackgroundStyle}>
              <HideButton onPress={handleHide} />
              <View style={{paddingHorizontal: 20, paddingTop: 16}}>
                <Text
                  style={[
                    {color: 'rgba(155, 155, 155, 1)'},
                    styles.cardLabelFont,
                  ]}>
                  Balance
                </Text>
                <Text style={[{marginTop: 8}, styles.amountFont]}>
                  {hide ? 'XX,XXX' : '₹12,000'}
                </Text>
              </View>
            </ImageBackground>
          </LinearGradient>
        </View>
        <View style={styles.bottomParentContainer}>
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 12,
            }}>
            <Text
              style={[
                {
                  color: 'rgba(104, 26, 96, 0.6)',
                },
                styles.cardLabelFont,
              ]}>
              Savings
            </Text>
            <View style={styles.amountContainer}>
              <Text style={styles.amountFont}>
                {hide ? 'XX,XXX' : '₹36,800'}
              </Text>

              <SaveButton />
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default Card1;

const styles = StyleSheet.create({
  amountFont: {
    fontFamily: fonts.IBMPlexMono_SemiBold,
    color: 'rgba(37, 37, 37, 0.9)',
    fontSize: 30,
  },
  cardLabelFont: {fontFamily: 'Barlow-SemiBold', fontSize: 18, lineHeight: 22},
  amountContainer: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomParentContainer: {
    height: '50%',
    width: '100%',
    backgroundColor: 'rgba(148, 11, 154, 0.1)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  ImageBackgroundStyle: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});
