import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text as PaperText, Button as PaperButton} from 'react-native-paper';
import {Fonts} from '../../../assets';
// import {translations} from '../../../constants/translations/index';

function HeaderComponent() {
  return (
    <View style={styles.mainView}>
      <PaperText style={styles.headerTitle}>myBookmarks</PaperText>
      {/* <PaperText style={styles.headerText}>LoremIpsum</PaperText> */}
    </View>
  );
}

export default HeaderComponent;

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
    fontSize: 40,
    paddingBottom: 8,
    color: 'black',
    fontWeight: 'bold',
  },
  headerText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    paddingBottom: 10,
    color: 'black',
  },
});
