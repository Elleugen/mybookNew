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
  // BookCards,
  // Header,
  BookCardsComponent,
  HeaderComponent,
  SearchBarComponent,
} from '../../components';
import {Theme} from '../../../../configs/ThemeConfig';
import {FontWeightConfig} from '../../../../configs/FontConfig';
import Images from '../../../../assets/';
// import { PaperComponent } from '../../components';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectorCurrentDashboard, getDashboard} from '../../redux';

function DashboardScreen({currentDashboard, getDashboard}) {
  //   useEffect(() => {
  //     setTranslate(t('common:floatingButton.translate'));
  //   });

  // console.log('currentDashboard NI:', currentDashboard);
  // useFocusEffect(
  //   useCallback(() => {
  //     getDashboard();
  //     console.log('currentDashboard(after):', currentDashboard);
  //   }, []),
  // );
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={Images.background}
        style={{height: '100%'}}
        imageStyle={{opacity: 0.8}}>
        <SafeAreaView>
          {/* <HeaderComponent /> */}
          <SearchBarComponent />
          <BookCardsComponent />
        </SafeAreaView>
      </ImageBackground>

      {/* CHANGE LANGUAGES DIALOG */}
    </View>
  );
}

const mapStateToProps = createStructuredSelector({
  currentDashboard: selectorCurrentDashboard,
});

const mapDispatchToProps = dispatch => ({
  // getProducts: () => dispatch(getProducts()),
  getDashboard: () => dispatch(getDashboard()),
});

// export default DashboardScreen;
export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    backgroundColor: Theme.background,
  },
});
