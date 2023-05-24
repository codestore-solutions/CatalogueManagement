import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ListTile = (props: {
  Leading?: JSX.Element;
  Trailing?: JSX.Element;
  borderRadius?: number;
  elevation?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  backgroundColor?: string;
  height?: number;
  width?: number;
  onPress?:any
}) => {
  var border = 10;
  var elevation = 10;
  var color = 'white';
  if (props.borderRadius != undefined) {
    border = props.borderRadius;
  }
  if (props.elevation != undefined) {
    elevation = props.elevation;
  }
  if (props.backgroundColor != undefined) {
    color = props.backgroundColor;
  }
  return (
    <TouchableOpacity
    onPress={props.onPress}
    >
        <View
      style={[
        styles.body,
        {
          borderRadius: border,
          elevation: elevation,
          backgroundColor: color,
          height:props.height,
          width:props.width,
          marginHorizontal:props.marginHorizontal,
          marginVertical:props.marginVertical,
        },
      ]}>
      {props.Leading}
      <View style={{flex:1}}>
      {props.Trailing}
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default ListTile;

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
  },
});
