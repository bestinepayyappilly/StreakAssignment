import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  PixelRatio,
  Dimensions,
  Pressable,
} from 'react-native';
import {Header1, Hairline, CrossButton, SubmitButton1} from '../../components';
import TextInput1 from '../../components/molecules/TextInput1';
import {colors, fonts} from '../../constants';
import {useDispatch} from 'react-redux';
import {SAVE_INFO} from '../../_Redux/constants';

const {height, width} = Dimensions.get('screen');
const windowHeight = Dimensions.get('window').height;
const navBarHeight = height - windowHeight + StatusBar.currentHeight;

const index = ({navigation}) => {
  const [firstName, setFirstName] = useState(null);
  const [secondName, setSecondName] = useState(null);
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const dispatch = useDispatch();
  const SaveInputs = () => {
    if (firstName && secondName && email && number) {
      dispatch({
        type: SAVE_INFO,
        payload: {
          firstName: firstName,
          secondName: secondName,
          email: email,
          number: number,
        },
      });
      navigation.navigate('DashBoard');
    } else {
      alert('Please fill all inputs');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView
        style={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <Header1 />
        <View style={styles.crossButtonContainer}>
          <CrossButton
            onPress={() => {
              navigation.navigate('DashBoard');
            }}
          />
        </View>
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionStyle}>
            Enter your details so we can {'\n'}get to know you better.
          </Text>
        </View>
        <Hairline />
        <View style={{marginTop: 18}}>
          <TextInput1
            label="First Name"
            value={firstName}
            onChangeText={text => {
              setFirstName(text);
            }}
          />
          <TextInput1
            label="Second Name"
            value={secondName}
            onChangeText={text => {
              setSecondName(text);
            }}
          />
          <TextInput1
            value={email}
            label="Email"
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <TextInput1
            value={number}
            label="Mobile Number"
            keyboardType="numeric"
            onChangeText={text => {
              setNumber(text);
            }}
          />
        </View>
        <View style={{marginTop: 8, alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: fonts.IBM_Medium,
              fontSize: 16,
              color: colors.GreyLight,
            }}>
            OTP verification in next step
          </Text>
        </View>
      </ScrollView>
      <SubmitButton1 onPress={SaveInputs} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 16,
  },
  scrollViewContainer: {
    marginTop: StatusBar.currentHeight,
    height: height,
    width: width,
    backgroundColor: colors.white,
    marginBottom: 50,
  },
  instructionStyle: {
    color: colors.GreyLight,
    fontSize: 16,
    lineHeight: 21,
    fontFamily: fonts.IBM_SemiBold,
  },
  instructionContainer: {paddingHorizontal: 20, paddingTop: 20},
  crossButtonContainer: {position: 'absolute', right: 20, top: 10},
});
