import {LinearGradient} from 'expo-linear-gradient';
import React, {useState, useRef} from 'react';
import {
  ActivityIndicator,
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors, fonts} from '../../constants';
import CardContainer from '../molecules/CardContainer';
import axios from 'axios';
import AnimatedNumbers from 'react-native-animated-numbers';
import NumberTicker from 'react-native-number-ticker';

const GameOfTheDayCard = () => {
  const [number, setNumber] = useState([0, 0, 0, 0]);
  const [loading, setLoading] = useState(false);

  // const increase = () => {
  //   Animated.timing(
  //     animateToNumber,
  //     {
  //       toValue: 100,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     },
  //     1000,
  //   );
  // };
  {
    if (number) console.log(number.map(e => e));
  }
  // if (!number) {
  //   null;
  // } else {
  //   const [x, y, z, w] = number;
  // }
  const getNumbers = async () => {
    await axios
      .get(
        'https://raw.githubusercontent.com/Streak-Tech/assigment/main/data.json',
      )
      .then(res => {
        setNumber(res.data.numbers);
        setLoading(false);
      })

      .catch(e => {
        console.log(e);
      });
  };

  return (
    <CardContainer
      labelFontStyle={{color: 'rgba(99, 30, 0, 1)'}}
      label="Game of the day"
      style={{
        backgroundColor: 'rgba(251, 247, 245, 1)',
        borderColor: 'rgba(0, 0, 0, 0.08)',
      }}
      ButtonStyle={{backgroundColor: 'rgba(242, 233, 225, 0.45)'}}
      ButtonLabelStyle={{color: 'rgba(163, 80, 62, 0.9)'}}
      iconColor="rgba(163, 80, 62, 0.9)"
      buttonLabel="View all games">
      <View style={{paddingHorizontal: 13}}>
        <View
          style={{
            borderWidth: 4,
            padding: 10,
            borderRadius: 19.4,
            borderColor: 'rgba(242, 233, 225, 0.9)',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            {number.map((e, i) => {
              return (
                <View
                  style={{
                    borderWidth: 6,
                    borderRadius: 7.19,
                    borderColor: 'rgba(218, 155, 124, 0.3)',
                    flex: 1,
                    marginHorizontal: 5,
                    justifyContent: 'center',
                  }}>
                  <LinearGradient
                    colors={[
                      'rgba(146, 90, 37, 0.2)',
                      'rgba(146, 90, 37, 0.2)',
                      'rgba(150, 95, 38, 0.2)',
                      'rgba(162, 109, 41, 0.2)',
                      'rgba(183, 134, 45, 0.2)',
                      'rgba(211, 167, 50, 0.2)',
                      'rgba(207, 162, 49, 0.2)',
                      'rgba(189, 138, 45, 0.2)',
                      'rgba(178, 123, 43, 0.2)',
                      'rgba(171, 115, 42, 0.2)',
                      'rgba(169, 112, 41, 0.2)',
                      'rgba(178, 124, 49, 0.2)',
                      'rgba(201, 160, 79, 0.2)',
                      'rgba(248, 227, 140, 0.2)',
                      'rgba(223, 194, 113, 0.2)',
                      'rgba(177, 129, 57, 0.2)',
                      'rgba(157, 103, 40, 0.2)',
                      'rgba(153, 98, 40, 0.2)',
                      'rgba(141, 84, 42, 0.2)',
                      'rgba(129, 70, 43, 0.2)',
                    ]}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                      }}>
                      <NumberTicker
                        number={e}
                        textSize={80}
                        duration={i === 0 || i === 1 ? 2000 : 4000}
                        style={{
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          alignSelf: 'flex-start',
                        }}
                        textStyle={{
                          fontFamily: fonts.Barlow_SemiBold,
                          color: 'rgba(99, 30, 0, 1)',
                          alignSelf: 'flex-start',
                        }}
                      />
                    </View>
                  </LinearGradient>
                </View>
              );
            })}
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <Text
            style={{
              fontFamily: fonts.Barlow_SemiBold,
              color: 'rgba(171, 96, 79, 0.8)',
              fontSize: 18,
              lineHeight: 21.6,
            }}>
            Win prizes worth ₹4000 or more.
          </Text>
          <Pressable
            onPress={() => {
              getNumbers(), setLoading(true);
            }}
            style={{
              marginTop: 20,
              flex: 1,
              paddingVertical: 10,
              backgroundColor: 'rgba(171, 96, 79, 1)',
              borderRadius: 28.5,
              paddingHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text
              style={{
                color: colors.white,
                fontSize: 18,
                fontFamily: fonts.Barlow_SemiBold,
                lineHeight: 21.6,
                marginHorizontal: 10,
              }}>
              Try your luck
            </Text>
            {loading ? <ActivityIndicator size="small" color="#fff" /> : null}
          </Pressable>
        </View>
      </View>
    </CardContainer>
  );
};

export default GameOfTheDayCard;

const styles = StyleSheet.create({});
