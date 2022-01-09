import React from 'react';
import Navigator from './src/Navigator';
import {Provider} from 'react-redux';
import configureStore from './src/_Redux/store/configureStore';
const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
