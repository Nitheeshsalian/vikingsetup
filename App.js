/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/reducers/index';
import {PersistGate} from 'redux-persist/integration/react';
import Home from './src/feature/home/pages/home';

const App: () => React$Node = () => {
  const [storeConfig, setStoreConfig] = useState(configureStore());

  return (
    <Provider store={storeConfig.store}>
      <PersistGate loading={null} persistor={storeConfig.persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};
export default App;
