import React from 'react';
import RootNavigator from './src/Navigation/RootNavigator';
import {LogBox} from 'react-native'
import WebSocket from './src/utils/socket';
import webSocket from './src/utils/socket';

function App(): JSX.Element {
LogBox.ignoreAllLogs();
  return (
   <RootNavigator/>
  );
}
export default App;      