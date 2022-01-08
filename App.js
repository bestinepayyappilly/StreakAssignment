import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {DashBoard, Profile} from './src/screens';
import Navigator from './src/Navigator';

const App = () => {
  return <Navigator />;
};

export default App;

const styles = StyleSheet.create({});
