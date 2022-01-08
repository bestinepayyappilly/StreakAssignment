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
import {BackGround1, Logo1, Avatar, CardLogo} from '../../assets/images';
import {colors} from '../../constants';
const {height, width} = Dimensions.get('screen');

const index = () => {
  console.log(StatusBar.currentHeight);
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#fff'}}
      showsVerticalScrollIndicator={false}>
      <View style={{height: height / 2}}>
        <ImageBackground
          source={BackGround1}
          blurRadius={7}
          style={{height: '100%', width: '100%'}}>
          <View
            style={{
              marginTop: 49,
              paddingHorizontal: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Image source={Logo1} style={{height: 41, width: 39}} />
          </View>
          {/* <View
            style={{
              height: 37,
              width: 101,
              borderRadius: 32,
              backgroundColor: '#430754',
              borderWidth: 1.14,

              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: 49,
              right: 15.4,
            }}>
            <View
              style={{
                shadowOffset: {height: -11, width: 11},
                shadowOpacity: 1.0,
                shadowRadius: 49,
                shadowColor: '#2e053a',
                height: '90%',
                width: '95%',
                backgroundColor: '#430754',
                borderRadius: 32,
              }}>
              <View
                style={{
                  shadowOffset: {height: 11, width: -11},
                  shadowOpacity: 1.0,
                  shadowRadius: 49,
                  shadowColor: '#58096e',
                  height: '100%',
                  width: '100%',
                  backgroundColor: '#430754',
                  borderRadius: 32,
                }}></View>
            </View>
          </View> */}
          {/* <View
            style={{
              backgroundColor: 'transparent',
              height: 37,
              width: 101,
              position: 'absolute',
              top: 49,
              right: 15.4,
              borderRadius: 32,
              borderWidth: 2.49,
              borderColor: 'rgba(0, 0, 0, 0.15)',
              shadowOffset: {
                height: -6,
                width: -6,
              },
            }}>
            {/* <Image
              source={Avatar}
              style={{height: '100%', width: '100%', borderRadius: 15}}
            /> */}
          {/* </View> */}
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
                }}>
                <ImageBackground
                  source={CardLogo}
                  style={{
                    height: '100%',
                    width: '100%',
                    marginBottom: 10,
                    borderRadius: 10,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}>
                  <Text style={{color: 'rgba(0,0,0,1)'}}>hello</Text>
                </ImageBackground>
              </View>
              <View
                style={{
                  height: '50%',
                  width: '100%',
                  backgroundColor: 'rgba(148, 11, 154, 0.1)',
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}></View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{height: height}}></View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
