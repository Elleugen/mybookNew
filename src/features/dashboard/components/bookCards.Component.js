import React, {useCallback, useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectorCurrentDashboard, getDashboard} from '../redux';
import StarRating from 'react-native-star-rating';
import Images from '../../../assets';

function BookCardsComponent({currentDashboard, getDashboard}) {
  console.log('currentDashboard NI:', currentDashboard);
  useFocusEffect(
    useCallback(() => {
      getDashboard();
      console.log('currentDashboard(after):', currentDashboard);
    }, []),
  );

  // const [searchBooks, setSearchBooks] = useState('');
  // console.log('searchBooks ::', searchBooks);

  const [rating, setRating] = useState(0);
  const [bookmarked, setBookmarked] = useState(0);
  // const bookmarked[];

  // const onStarRatingPress = () => {
  //   this.setState({
  //     starCount: rating
  //   });
  // }
  var lis = [];

  for (var i = 0; i < rating; i++) {
    console.log('rating::', rating);
    lis.push(<Image style={styles.ratingImage} source={Images.rating} />);
  }

  return (
    <View>
      {currentDashboard?.lenght !== 0 &&
        currentDashboard?.items?.map((books, i) => {
          // console.log('All books ::', books);
          // console.log('searchBooks ::', searchBooks);
          // console.log(
          //   'books.volumeInfo.ratingsCount ::',
          //   books.volumeInfo.ratingsCount,
          // );
          console.log(
            'books.volumeInfo.averageRating ::',
            books.volumeInfo.averageRating,
          );
          books?.volumeInfo?.readingModes?.text == false;
          // const rate = books.volumeInfo.averageRating;
          // console.log('rate::', rate);
          // setRating(books.volumeInfo.averageRating);
          return (
            // <View key={books.id}>
            <View key={i} style={styles.mainView}>
              <View style={styles.thumbnailContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    // source={Images.background}
                    source={{
                      uri: books?.volumeInfo?.imageLinks?.smallThumbnail,
                    }}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    // books?.volumeInfo?.readingModes === true;
                    setBookmarked(bookmarked + 1);
                    console.log('bookmarked::', bookmarked);
                    // console.log(
                    //   'books?.volumeInfo?.readingModes.text ::',
                    //   books?.volumeInfo?.readingModes.text,
                    // );
                  }}>
                  {bookmarked % 2 === 0 ? (
                    <View style={styles.bookmarkImageContainer}>
                      <Image
                        style={styles.bookmarkImage}
                        source={Images.bookmark}
                      />
                    </View>
                  ) : (
                    <View style={styles.bookmarkImageContainer}>
                      <Image
                        style={styles.bookmarkImage}
                        source={Images.unBookmark}
                      />
                    </View>
                  )}
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.titleTextContainer}>
                  <Text style={styles.bookTitle}>{books.volumeInfo.title}</Text>
                </View>
                {books.volumeInfo.authors == null ||
                books.volumeInfo.authors == '' ? (
                  <View style={styles.authorTextContainer}>
                    <Text style={styles.bookAuthor}>by unknown</Text>
                  </View>
                ) : (
                  <View style={styles.authorTextContainer}>
                    <Text style={styles.bookAuthor}>
                      by {books.volumeInfo.authors}
                    </Text>
                  </View>
                )}

                {books.volumeInfo.description == null ||
                books.volumeInfo.description == '' ? (
                  <Text
                    style={styles.headerText}
                    numberOfLines={2}
                    ellipsizeMode="tail">
                    no Desciptions
                  </Text>
                ) : (
                  <Text
                    style={styles.headerText}
                    numberOfLines={4}
                    ellipsizeMode="tail">
                    {books.volumeInfo.description}
                  </Text>
                )}
              </View>
              <View>
                {books.volumeInfo.ratingsCount == null ||
                books.volumeInfo.ratingsCount == '' ? (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.ratingText} ellipsizeMode="tail">
                      no Ratings
                    </Text>
                    {/* <StarRating
                      disabled={false}
                      maxStars={5}
                      // rating={this.state.starCount}
                      // selectedStar={rating => this.onStarRatingPress(rating)}
                    /> */}
                  </View>
                ) : (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.ratingText} ellipsizeMode="tail">
                      Rating : {books.volumeInfo.averageRating}
                    </Text>
                    {lis}
                    <Image style={styles.ratingImage} source={Images.rating} />
                    {/* <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={setRating(books.volumeInfo.ratingsCount)}
                      // selectedStar={rating => this.onStarRatingPress(rating)}
                    /> */}
                  </View>
                )}
              </View>
            </View>
          );
        })}
    </View>
  );
}

const mapStateToProps = createStructuredSelector({
  currentDashboard: selectorCurrentDashboard,
});

const mapDispatchToProps = dispatch => ({
  getDashboard: () => dispatch(getDashboard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCardsComponent);

const styles = StyleSheet.create({
  mainView: {
    borderBottomRightRadius: 50,
    borderWidth: 5,
    borderLeftColor: 'rgba(255, 255, 255, 0)',
    borderTopColor: 'rgba(255, 255, 255, 0)',
    borderRightColor: 'rgba(255, 0,0, 0.6)',
    borderBottomColor: 'rgba(255, 0,0, 0.6)',
    paddingVertical: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginVertical: 5,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  titleTextContainer: {
    alignItems: 'center',
  },
  authorTextContainer: {
    alignItems: 'flex-end',
  },
  bookTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
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
  ratingText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
  },
  textInputContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    height: 100,
  },
  textTitle: {
    color: 'black',
  },
  thumbnailContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    alignSelf: 'center',
  },
  image: {
    height: 150,
    width: 300,
    borderRadius: 20,
    justifyContent: 'center',
  },
  bookmarkImage: {
    height: 20,
    width: 20,
    marginLeft: 10,
    alignItems: 'flex-end',
  },
  bookmarkImageContainer: {
    alignItems: 'flex-end',
  },
  ratingImage: {
    height: 30,
    width: 30,
    justifyContent: 'center',
  },
});
