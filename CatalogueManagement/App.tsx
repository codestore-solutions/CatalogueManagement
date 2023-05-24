import React from 'react';
import RootNavigator from './src/Navigation/RootNavigator';
import {LogBox} from 'react-native'

function App(): JSX.Element {
LogBox.ignoreAllLogs();
  return (
   <RootNavigator/>
  );
}
export default App;      