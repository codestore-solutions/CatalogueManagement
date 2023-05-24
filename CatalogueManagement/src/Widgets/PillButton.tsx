import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

const PillButton = (props: {
  width?: number;
  height?: number;
  buttonColor?: string;
  child: JSX.Element;
  onPress: any;
}) => {
  var color = 'black';
  if (props.buttonColor != undefined) {
    color = props.buttonColor;
  }
  return (
    <TouchableOpacity
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: color,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding:10
      }}
      onPress={props.onPress}>
      {props.child}
    </TouchableOpacity>
  );
};

export default PillButton;

const styles = StyleSheet.create({});
