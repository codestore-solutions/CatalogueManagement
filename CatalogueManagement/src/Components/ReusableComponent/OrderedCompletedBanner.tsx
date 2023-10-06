import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {COLORS} from '../../Constants/colors';
import successAnimation from '../../Assets/json/successfull.json';
import failedAnimation from '../../Assets/json/failedAnimation.json';

const OrderedCompletedBanner = ({paymentFailed}: {paymentFailed?: boolean}) => {
  return (
    <View
      style={{
        width: '100%',
        borderRadius: 20,
        marginBottom: 20,
        alignItems: 'center',
      }}>
      <LottieView
        source={paymentFailed ? failedAnimation : successAnimation}
        autoPlay
        resizeMode="cover"
        style={{height: 130, width: 200}}
      />
      <Text
        style={{
          color: paymentFailed ? 'red' : 'green',
          textAlign: 'center',
          textAlignVertical: 'center',
          fontWeight: '700',
          fontSize: 24,
        }}>
        {paymentFailed ? 'Payment Failed!' : 'Ordered Successfully'}
      </Text>
      {paymentFailed && (
        <TouchableOpacity>
          <Text
            style={{
              padding: 10,
              margin: 10,
              borderColor: COLORS.PrimaryColor,
              borderRadius: 10,
              borderWidth: 1,
              color: COLORS.PrimaryColor,
              fontWeight: '800',
              fontSize: 16,
            }}>
            Retry Payment
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default OrderedCompletedBanner;
