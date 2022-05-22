import React, {useCallback, useState, useEffect, Fragment} from 'react';
import {View, StatusBar} from 'react-native';

import {RootNavigation} from './src/configs';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider} from 'react-redux';
import configStore from './src/state_management';

const {store, persistor} = configStore();

const App = () => {
  return (
    <PaperProvider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
        <RootNavigation />
      </View>
      {/* </PersistGate> */}
    </PaperProvider>
  );
};

export default App;
