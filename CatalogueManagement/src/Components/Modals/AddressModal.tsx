import React from 'react';
import {Modal, Text, TouchableOpacity, View, StatusBar} from 'react-native';
import {COLORS} from '../../Constants/colors';
import AddressBox from '../ReusableComponent/AddressBox';
import {useNavigation} from '@react-navigation/native';

function AddressModal({show, setShow}: {show: boolean; setShow: Function}) {
  const navigation: any = useNavigation();
  return (
    <Modal transparent visible={show} animationType="slide">
      <StatusBar backgroundColor={'rgba(0, 0, 0, 0.5)'} />
      <View
        style={{
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <TouchableOpacity onPress={() => setShow(false)} style={{flex: 1}} />
        <View
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            paddingHorizontal: '4%',
            paddingTop: 30,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            zIndex: 9,
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontWeight: '600',
              }}>
              Select Address
            </Text>
            <TouchableOpacity
              onPress={() => {
                setShow(false);
                navigation.navigate('Address');
              }}>
              <Text
                style={{
                  fontSize: 30,
                  color: COLORS.PrimaryColor,
                  fontWeight: '600',
                  paddingHorizontal: 5,
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <AddressBox />
          <TouchableOpacity
            style={{
              width: '100%',
              height: 50,
              backgroundColor: '#7E72FF',
              marginVertical: 15,
              alignSelf: 'center',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setShow(false);
            }}>
            <Text style={{color: 'white'}}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default AddressModal;
