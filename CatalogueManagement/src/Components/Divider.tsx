import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Divider = (props: {
  width: number | string;
  color?: string;
  marginVertical?: number;
}) => {
  return (
    <View
      style={{
        height: 1,
        width: props.width,
        backgroundColor: props.color == undefined ? '#EAEAEA' : props.color,
        alignSelf: 'center',
        marginVertical: props.marginVertical,
      }}></View>
  );
};

export default Divider;
