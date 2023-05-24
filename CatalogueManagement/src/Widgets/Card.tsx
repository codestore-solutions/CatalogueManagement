import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = (props: {
  child: JSX.Element;
  elevation?: number;
  borderRadius?: number;
  backgroundColor?: string;
  margin?:number
}) => {
    var elevation = 10;
    var radius = 10;
    var background = 'white';

    if(props.backgroundColor != undefined){background = props.backgroundColor}
    if(props.elevation != undefined){elevation = props.elevation}
    if(props.borderRadius != undefined){radius = props.borderRadius}
  return (
    <View
      style={{
        backgroundColor: background,
        elevation: elevation,
        borderRadius: radius,
        margin:props.margin
      }}>
      {props.child}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  body: {},
});
