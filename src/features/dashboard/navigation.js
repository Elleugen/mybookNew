import React from 'react';
import {DashboardScreen} from './views';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
// import {Colors} from '../../resources';

export default {
  'Dashboard.DashboardScreen': {
    screen: DashboardScreen,
    options: {
      headerShown: false,
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    width: '100%',
    backgroundColor: 'white',
  },
  iconContainer: {
    margin: 20,
    marginRight: 5,
    flex: 0.2,
  },
});
