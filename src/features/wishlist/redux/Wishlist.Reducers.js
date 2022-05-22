import {wishlistTypes} from '.';

const initState = {
  currentWishlist: [],
};

export const wishlistReducers = (state = initState, action) => {
  switch (action.type) {
    case wishlistTypes.SET_WISHLIST:
      return {...state, ...action.payload};
    case wishlistTypes.SET_DEFAULT_WISHLIST:
      return initState;
    default:
      return state;
  }
};
