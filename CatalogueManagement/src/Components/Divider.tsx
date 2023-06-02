import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Divider = (props: {width: number | string,color?:string}) => {
  return (
    <View
      style={{
        height: 1,
        width: props.width,
        backgroundColor: props.color == undefined? '#E5E7EA':props.color,
        alignSelf: 'center',
      }}></View>
  );
};

export default Divider;
