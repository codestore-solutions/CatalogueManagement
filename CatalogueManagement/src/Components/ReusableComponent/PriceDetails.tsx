import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../Constants/colors';
import Divider from '../Divider';

const PriceDetails = ({
  variantData,
  quantity,
}: {
  variantData: any;
  quantity: number;
}) => {
  return (
    <View style={{marginVertical: 20}}>
      <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
        Price Details (1 items)
      </Text>
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '300',
            color: COLORS.TextLight,
          }}>
          Subtotal
        </Text>
        <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
          ₹{parseInt(variantData.price) * quantity}
        </Text>
      </View>
      <View
        style={{
          marginTop: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '300',
            color: COLORS.TextLight,
          }}>
          Taxes
        </Text>
        <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
          ₹49
        </Text>
      </View>
      <View
        style={{
          marginVertical: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '300',
            color: COLORS.TextLight,
          }}>
          Delivery Charges
        </Text>
        <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
          ₹99
        </Text>
      </View>
      <Divider width={'100%'} />
      <View
        style={{
          marginVertical: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          Total Amount
        </Text>
        <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
          ₹{parseInt(variantData.price) * quantity + 49 + 99}
        </Text>
      </View>
    </View>
  );
};

export default PriceDetails;
