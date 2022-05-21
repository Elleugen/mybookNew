import {combineReducers} from 'redux';
import {dashboardReducers} from '../features/dashboard/redux';

const rootReducer = combineReducers({
  dashboard: dashboardReducers,
});

export default rootReducer;
