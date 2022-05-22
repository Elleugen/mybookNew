import {combineReducers} from 'redux';
import {dashboardReducers} from '../features/dashboard/redux';
import {wishlistReducers} from '../features/wishlist/redux';

const rootReducer = combineReducers({
  dashboard: dashboardReducers,
  wishlist: wishlistReducers,
});

export default rootReducer;
