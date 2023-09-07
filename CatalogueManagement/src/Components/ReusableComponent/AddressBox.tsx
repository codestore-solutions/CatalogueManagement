import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../Constants/colors';
import RadioActive from '../SvgIcons/RadioActive';

const AddressBox = ({showDelete, data}: {showDelete?: boolean; data: any}) => {
  console.log(data);
  return (
    <View
      style={{
        marginTop: 20,
        borderWidth: 1,
        alignSelf: 'center',
        borderColor: COLORS.BorderColor,
        elevation: 1,
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        width: '100%',
      }}>
      <View style={{paddingRight: 10}}>
        <RadioActive />
      </View>
      <View style={{flexGrow: 1, flexShrink: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexShrink: 1}}>
            <Text style={{fontWeight: '700', fontSize: 18, color: '#000'}}>
              Hi, Yashiki
            </Text>
            <Text
              style={{
                fontWeight: '300',
                fontSize: 14,
                marginVertical: 5,
                color: COLORS.TextLight,
                flexShrink: 1,
              }}>
              {data.street +
                ' ' +
                data.city +
                ', ' +
                data.state +
                ' ' +
                data.country +
                ' ' +
                data.postalCode}
            </Text>
          </View>
          <Text
            style={{
              fontWeight: '300',
              fontSize: 15,
              color: COLORS.PrimaryColor,
              borderColor: COLORS.PrimaryColor,
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              height: 22,
              textAlignVertical: 'center',
            }}>
            Office
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
            alignItems: 'center',
            gap: 10,
          }}>
          <Text
            style={{
              fontWeight: '300',
              fontSize: 14,
              color: COLORS.TextLight,
              flexShrink: 1,
            }}>
            Mobile :{' '}
            <Text style={{fontWeight: '700', fontSize: 14, color: '#000'}}>
              {data.countryCode + ' ' + data.phoneNumber}
            </Text>
          </Text>
          <View style={{flexDirection: 'row', gap: 10}}>
            {showDelete && (
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.TextLight,
                  borderRadius: 5,
                  paddingHorizontal: 15,
                  paddingVertical: 3,
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 15,
                    textAlignVertical: 'center',
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: COLORS.TextLight,
                borderRadius: 5,
                paddingHorizontal: 20,
                paddingVertical: 3,
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 15,
                  textAlignVertical: 'center',
                }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddressBox;
