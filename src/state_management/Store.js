import {createStore, compose, applyMiddleware} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from './RootReducers';

// const rootReducer = {user: {userToken: ''}};

const middleware = [thunk];

// if (__DEV__){
//     middleware.push(logger);
// }

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  whitelist: [],
  whitelist: [],
};

const persistedReduser = persistReducer(persistConfig, rootReducer);

export default createStore(
  persistedReduser,
  compose(applyMiddleware(...middleware)),
);
