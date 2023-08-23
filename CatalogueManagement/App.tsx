import React from 'react';
import RootNavigator from './src/Navigation/RootNavigator';
import {StatusBar} from 'native-base';
import {COLORS} from './src/Constants/colors';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.Light} />
      <RootNavigator />
    </Provider>
  );
}
export default App;
