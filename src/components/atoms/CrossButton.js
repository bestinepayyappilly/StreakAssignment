import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-elements';
import {cross} from '../../assets/images';

const CrossButton = ({onPress}) => {
  return (
    <View style={{flex: 1}}>
      <Pressable
        onPress={onPress}
        style={{
          height: 40,
          width: 40,
          backgroundColor: '#fff',
          elevation: 5,
          padding: 12,
          borderRadius: 20,
          shadowColor: '#000',
        }}>
        <Image source={cross} style={{height: '100%', width: '100%'}} />
      </Pressable>
    </View>
  );
};

export default CrossButton;

const styles = StyleSheet.create({});
