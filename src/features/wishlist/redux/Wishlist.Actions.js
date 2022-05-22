import {Wishlist} from '../../../services';
import {wishlistTypes} from './';

export const setWishlist = payload => ({
  type: wishlistTypes.SET_WISHLIST,
  payload,
});

export const setDefaultWishlist = () => ({
  type: wishlistTypes.SET_DEFAULT_WISHLIST,
});

export const getWishlist = () => async dispatch => {
  try {
    const result = await Wishlist.getWishlist();
    dispatch(
      setWishlist({
        currentWishlist: result,
      }),
    );
  } catch (error) {
    console.log('getWishlist::', error);
  }
};
