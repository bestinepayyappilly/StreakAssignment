import React from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import {Header1, Hairline, CrossButton} from '../../components';
import TextInput1 from '../../components/molecules/TextInput1';
import {colors, fonts} from '../../constants';

const index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView style={styles.scrollViewContainer}>
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
            Enter your details so we can {'\n'} get to know you better.
          </Text>
        </View>
        <Hairline />
        <View style={{marginVertical: 18}}>
          <TextInput1 label="First Name" />
          <TextInput1 label="Second Name" />
          <TextInput1 label="Email" />
          <TextInput1 />
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewContainer: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: colors.white,
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
