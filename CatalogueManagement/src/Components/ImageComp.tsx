import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

type propType = {
  url: string | undefined | null;
  imageStyle?: Object;
  resizeMode: any;
};

const ImageComp = (props: propType) => {
  if (props.url != undefined && props.url != null && props.url.length > 0) {
    return (
      <Image
        resizeMode={props.resizeMode}
        style={props.imageStyle}
        source={{uri: props.url}}
      />
    );
  } else {
    return (
      <Image
        style={props.imageStyle}
        source={require('../Assets/Images/placeholder.jpg')}
      />
    );
  }
};

export default ImageComp;

const styles = StyleSheet.create({});
