import {View, Text} from 'react-native';
import React from 'react';

const OrderedCompletedBanner = () => {
  return (
    <View
      style={{
        backgroundColor: 'green',
        height: 200,
        width: '100%',
        borderRadius: 20,
        marginBottom: 20,
      }}>
      <Text
        style={{
          color: 'white',
          height: '100%',
          textAlign: 'center',
          textAlignVertical: 'center',
          fontWeight: '700',
          fontSize: 24,
        }}>
        Ordered Successfully
      </Text>
    </View>
  );
};

export default OrderedCompletedBanner;
