import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../Constants/colors';
import AddressModal from '../Modals/AddressModal';

const AddressCard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        // paddingHorizontal: '4%',
      }}>
      <Text style={{fontSize: 16}}>
        Delivery to :{' '}
        <Text style={{color: '#000', fontWeight: '700'}}>
          G-18, Noida Sec- 63
        </Text>
      </Text>
      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
        }}>
        <Text
          style={{
            fontWeight: '700',
            paddingHorizontal: 5,
            fontSize: 15,
            color: COLORS.PrimaryColor,
          }}>
          Change
        </Text>
      </TouchableOpacity>
      <AddressModal show={showModal} setShow={setShowModal} />
    </View>
  );
};

export default AddressCard;
