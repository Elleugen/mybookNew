import React from 'react';
import {WishlistScreen} from './views';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
// import {Colors} from '../../resources';

export default {
  'Dashboard.WishlistScreen': {
    screen: WishlistScreen,
    options: {
      // header: () => {
      //   const navigation = useNavigation();
      //   return (
      //     <View
      //       style={{
      //         ...styles.container,
      //       }}>
      //       <TouchableOpacity
      //         //   onPress={() => {
      //         //     navigation.navigate('Authentication.OnboardingScreen');
      //         //   }}
      //         style={{
      //           ...styles.iconContainer,
      //         }}>
      //         {/* <Icon name="arrow-left" size={25} color={Colors.primary} /> */}
      //       </TouchableOpacity>
      //     </View>
      //   );
      // },
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
