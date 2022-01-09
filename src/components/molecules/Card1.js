import React, {useState} from 'react';
import {StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native';
import {CardLogo, EyeIcon} from '../../assets/images';
import {LinearGradient} from 'expo-linear-gradient';
import {fonts} from '../../constants';
import {Shadow} from 'react-native-neomorph-shadows';
import {Image} from 'react-native-elements';

const Card1 = () => {
  const [hide, setHide] = useState(true);
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 18,
        paddingHorizontal: 12,
      }}>
      <View
        style={{
          height: 219.57,
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: 10,
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
              'rgba(120, 15, 230, 0.13)',
            ]}
            style={{flex: 1}}
            start={{x: 0.1, y: 0.5}}
            end={{x: 0.4, y: 0.9}}>
            <ImageBackground
              imageStyle={{resizeMode: 'cover'}}
              source={CardLogo}
              style={{
                height: '100%',
                width: '100%',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
              }}>
              <View style={{position: 'absolute', top: 14, right: 20}}>
                <Pressable
                  onPress={() => setHide(!hide)}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Shadow
                    inner
                    useArt
                    style={{
                      shadowOffset: {width: 0, height: 2},
                      shadowOpacity: 0.3,
                      shadowColor: 'rgba(0, 0, 0, 1)',
                      shadowRadius: 2,
                      borderRadius: 30,
                      backgroundColor: 'rgba(155, 151, 182, 0.5)',
                      width: 43.2,
                      height: 43.2,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={EyeIcon}
                      resizeMode="contain"
                      style={{height: 24.19, width: 26.2, marginTop: 5}}
                    />
                  </Shadow>
                </Pressable>
              </View>
              <View style={{paddingHorizontal: 20, paddingTop: 16}}>
                <Text
                  style={{
                    color: 'rgba(155, 155, 155, 1)',
                    fontFamily: 'Barlow-SemiBold',
                    fontSize: 18,
                    lineHeight: 22,
                  }}>
                  Balance
                </Text>
                <Text
                  style={{
                    marginTop: 8,
                    fontFamily: fonts.IBMPlexMono_SemiBold,
                    color: 'rgba(37, 37, 37, 0.9)',
                    fontSize: 30,
                  }}>
                  {hide ? 'XX,XXX' : '₹12,000'}
                </Text>
              </View>
            </ImageBackground>
          </LinearGradient>
        </View>
        <View
          style={{
            height: '50%',
            width: '100%',
            backgroundColor: 'rgba(148, 11, 154, 0.1)',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 12,
            }}>
            <Text
              style={{
                color: 'rgba(104, 26, 96, 0.6)',
                fontFamily: 'Barlow-SemiBold',
                fontSize: 18,
                lineHeight: 22,
              }}>
              Savings
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 8,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: fonts.IBMPlexMono_SemiBold,
                  color: 'rgba(37, 37, 37, 0.9)',
                  fontSize: 30,
                }}>
                {hide ? 'XX,XXX' : '₹36,800'}
              </Text>

              <View
                style={{
                  overflow: 'hidden',

                  borderRadius: 32,
                }}>
                <Pressable
                  onPress={() => {
                    console.log('Save button pressed');
                  }}
                  style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Shadow
                    inner // <- enable inner shadow
                    useArt // <- set this prop to use non-native shadow on ios
                    style={{
                      shadowOffset: {width: 1, height: 2},
                      shadowOpacity: 0.3,
                      shadowColor: 'rgba(0, 0, 0, 1)',
                      shadowRadius: 1,
                      borderRadius: 30,
                      backgroundColor: 'rgba(206, 164, 206, 0.3)',
                      width: 98,
                      height: 32,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 14,
                    }}>
                    <Text
                      style={{
                        fontFamily: fonts.IBM_Bold,
                        color: '#400142',
                        lineHeight: 18.2,
                        fontSize: 14,
                      }}>
                      Save More
                    </Text>
                  </Shadow>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card1;

const styles = StyleSheet.create({});
