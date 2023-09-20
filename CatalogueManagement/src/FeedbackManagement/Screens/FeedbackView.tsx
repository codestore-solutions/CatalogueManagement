import React from 'react';
import WebView from 'react-native-webview';
import {useRoute} from '@react-navigation/native';

const FeedbackView = () => {
  const route = useRoute<any>();

  const debugging = `
  window.localStorage.setItem('name', JSON.stringify('${route.params.name}'));
  window.console.log(window.localStorage.getItem("name"));
  const consoleLog = (type, log) => window.ReactNativeWebView.postMessage(JSON.stringify({'type': 'Console', 'data': {'type': type, 'log': log}}));
  console = {
      log: (log) => consoleLog('log', log),
      debug: (log) => consoleLog('debug', log),
      info: (log) => consoleLog('info', log),
      warn: (log) => consoleLog('warn', log),
      error: (log) => consoleLog('error', log),
    };
`;

  const onMessage = (payload: any) => {
    let dataPayload;
    try {
      dataPayload = JSON.parse(payload.nativeEvent.data);
    } catch (e) {}

    if (dataPayload) {
      if (dataPayload.type === 'Console') {
        console.info(`[Console] ${JSON.stringify(dataPayload.data)}`);
      } else {
        console.log(dataPayload);
      }
    }
  };

  return (
    <WebView
      source={{uri: route.params.feedbackUrl}}
      injectedJavaScript={debugging}
      javaScriptEnabled
      style={{flex: 1}}
      onMessage={onMessage}
    />
  );
};

export default FeedbackView;
