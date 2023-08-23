import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import WebView from 'react-native-webview';
import {useRoute} from '@react-navigation/native';
import ProductServices from '../../CatalogueModule/Services/ProductsServices';
import {useState} from 'react';

const FeedbackView = () => {
  const route = useRoute<any>();
  return <WebView source={{uri: route.params.feedbackUrl}} style={{flex: 1}} />;
};

export default FeedbackView;
