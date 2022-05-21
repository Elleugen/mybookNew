import React, {useCallback, useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Button as PaperButton, TextInput} from 'react-native-paper';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectorCurrentDashboard, getDashboard} from '../redux';

function SearchBarComponent({currentDashboard, getDashboard}) {
  console.log('currentDashboard NI:', currentDashboard);
  useFocusEffect(
    // () => {
    // },
    useCallback(() => {
      // getDashboard();
      console.log('currentDashboard(after):', currentDashboard);
    }, []),
  );

  const [searchBooks, setSearchBooks] = useState('');
  console.log('searchBooks ::', searchBooks);
  // const [phoneNumberError, setPhoneNumberError] = useState(false);

  const onSearchBooks = value => {
    setSearchBooks(value);
    console.log('Value', value);
    getDashboard(value);
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.headerTitle}>Find your favorite book here!</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          label="Find your book here!"
          placeholder="Type your book title.."
          value={searchBooks}
          onChangeText={text => onSearchBooks(text)}
          // error={phoneNumberError}
          // left={<TextInput.Icon name="cellphone-android" />}
          style={{
            height: 50,
            backgroundColor: 'rgba(255,0,0,0.7)',
          }}
          // keyboardType="phone-pad"
          activeUnderlineColor={'white'}
        />
        {/* {phoneNumberError && (
          <Caption style={{color: theme.colors.error}}>
            No. Hp harus valid!
          </Caption>
        )} */}
        {/* <PaperButton
          onPress={() => {
            setSearchBooks(searchBooks);
          }}
          mode={'contained'}
          uppercase={false}
          contentStyle={styles.helpButtonContainer}
          style={styles.helpButtonStyle}
          labelStyle={styles.helpButtonLabelStyle}
          color={'#E60600'}>
          Search Books
        </PaperButton> */}
      </View>
      {/* <View>
        <Text>
          
        </Text>
      </View> */}
      <View>
        {currentDashboard.length > 0 &&
          currentDashboard.map((books, i) => {
            console.log('All books ::', books);
            console.log('searchBooks ::', searchBooks);
            return (
              // <View key={books.id}>
              <View key={i}>
                <Text style={styles.textTitle}>{books.id}</Text>
              </View>
            );
          })}
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent);

// export default SearchBarComponent;

const styles = StyleSheet.create({
  mainView: {
    // borderTopWidth: 0.6,
    borderRadius: 10,
    borderColor: 'lightgrey',
    paddingVertical: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginVertical: 50,
    marginHorizontal: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  titleTextContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
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
  textInputContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    // height: 100,
  },
  textTitle: {
    color: 'black',
  },
});
