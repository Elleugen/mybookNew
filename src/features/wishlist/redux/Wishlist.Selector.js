import {createSelector} from 'reselect';

const selectWishlist = state => state.wishlist;

export const selectorCurrentWishlist = createSelector(
  [selectWishlist],
  wishlist => wishlist.currentWishlist,
);
