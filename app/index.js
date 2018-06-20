/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../storeConfig';
import AppWithNavigationState from '../app/AppNavigator';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
console.ignoredYellowBox = ['Remote debugger'];
console.disableYellowBox = true;

const store = configureStore();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
