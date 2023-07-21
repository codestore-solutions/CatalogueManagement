import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import API from '../CatalogueModule/Services/API_Services';

const AdBanner = (props: {
  navigation: {navigate: (arg: string, arg0: Object) => void};
}) => {
  const [data, setdata] = useState<{productID: string; image: string}>(
    API.getAdBanner(),
  );

  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Product', 11);
      }}>
      <Image style={{width: '100%', height: 200}} source={{uri: data.image}} />
    </TouchableOpacity>
  );
};

export default AdBanner;

const styles = StyleSheet.create({});
