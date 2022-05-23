import React, {useCallback, useState, useEffect, Fragment} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView as SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Linking,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
  Portal,
  Dialog,
  RadioButton,
  // Searchbar,
} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import {
  BookCardsComponent,
  HeaderComponent,
  SearchBarComponent,
} from '../../../dashboard/components';
import {Theme} from '../../../../configs/ThemeConfig';
import {FontWeightConfig} from '../../../../configs/FontConfig';
import Images from '../../../../assets/';
// import { PaperComponent } from '../../components';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectorCurrentWishlist, getWishlist} from '../../redux';
import {WishlistComponent} from '../../components';

function WishlistScreen({currentWishlist, getWishlist}) {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={Images.background}
        style={{height: '100%'}}
        imageStyle={{opacity: 0.8}}>
        <SafeAreaView>
          <HeaderComponent />
          <WishlistComponent />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const mapStateToProps = createStructuredSelector({
  currentWishlist: selectorCurrentWishlist,
});

const mapDispatchToProps = dispatch => ({
  getWishlist: () => dispatch(getWishlist()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistScreen);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    backgroundColor: Theme.background,
  },
});
