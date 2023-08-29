import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../Constants/colors';
import AddressBox from '../../Components/ReusableComponent/AddressBox';
import EditAddressModal from '../../Components/Modals/EditAddressModal';

const Address = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View
      style={{
        backgroundColor: COLORS.Light,
        flex: 1,
        paddingHorizontal: '4%',
        paddingTop: 20,
      }}>
      <StatusBar backgroundColor={COLORS.Light} />
      <EditAddressModal show={showModal} setShow={setShowModal} />
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
          Default Address
        </Text>
      </View>
      <AddressBox showDelete />
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          marginVertical: 40,
          backgroundColor: '#7E72FF',
          alignSelf: 'center',
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setShowModal(true);
        }}>
        <Text style={{color: 'white'}}>Add New Address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({});
