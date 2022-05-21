import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text as PaperText, Button as PaperButton} from 'react-native-paper';
import {Fonts} from '../../../assets';
// import {translations} from '../../../constants/translations/index';
import Images from '../../../assets';

function BookCardsComponent() {
  return (
    <View style={styles.mainView}>
      <Image style={styles.thumbnail} source={Images.background} />
      <PaperText style={styles.headerTitle}>my Book</PaperText>
      <PaperText style={styles.headerText}>
        Jika Anda Mengalami Masalah Atau Membutuhkan Informasi Lebih Lanjut
      </PaperText>
      <PaperButton
        mode={'contained'}
        uppercase={false}
        contentStyle={styles.helpButtonContainer}
        style={styles.helpButtonStyle}
        labelStyle={styles.helpButtonLabelStyle}
        color={'#E60600'}>
        Hubungi Kami
      </PaperButton>
    </View>
  );
}

export default BookCardsComponent;

const styles = StyleSheet.create({
  mainView: {
    // borderTopWidth: 0.6,
    borderRadius: 20,
    borderColor: 'lightgrey',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    marginVertical: 20,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    paddingBottom: 8,
    color: 'black',
  },
  headerText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    paddingBottom: 10,
    color: 'black',
  },
  helpButtonStyle: {
    width: '100%',
    alignSelf: 'center',
    elevation: 3,
    borderRadius: 7,
    justifyContent: 'center',
  },
  helpButtonContainer: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpButtonLabelStyle: {
    fontSize: 16,
    letterSpacing: 0.2,
    fontFamily: 'Poppins-Black',
  },
  thumbnail: {
    height: 60,
    width: 67,
    marginRight: 10,
    justifyContent: 'center',
  },
});
