import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

const QuantityCounter = (props: {quantity: number; setQuant: Function}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.setQuant(
            props.quantity >= 2 ? props.quantity - 1 : props.quantity,
          );
        }}>
        <Text style={styles.quantity}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{props.quantity}</Text>
      <TouchableOpacity
        onPress={() => {
          props.setQuant(props.quantity + 1);
        }}>
        <Text style={styles.quantity}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    height: 26,
  },
  quantity: {
    marginHorizontal: 8,
    fontSize: 18,
    color: 'black',
  },
});

export default QuantityCounter;
