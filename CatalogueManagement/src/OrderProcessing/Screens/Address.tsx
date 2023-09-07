import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../Constants/colors';
import AddressBox from '../../Components/ReusableComponent/AddressBox';
import EditAddressModal from '../../Components/Modals/EditAddressModal';
import OrderingService from '../../services/OrderingService';

const Address = () => {
  const [showModal, setShowModal] = useState(false);
  const [addressData, setAddressData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    OrderingService.getAllAddress(5)
      .then(res => {
        setAddressData(res.data.data);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  if (isLoading) return <ActivityIndicator size={30} style={{margin: 40}} />;

  return (
    <View
      style={{
        backgroundColor: COLORS.Light,
        flex: 1,
      }}>
      <StatusBar backgroundColor={COLORS.Light} />
      <EditAddressModal show={showModal} setShow={setShowModal} />
      <FlatList
        ListHeaderComponent={() => (
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
        )}
        style={{
          paddingHorizontal: '4%',
          flexShrink: 1,
          flexGrow: 0,
        }}
        contentContainerStyle={{
          paddingVertical: 20,
        }}
        data={addressData}
        renderItem={({item}) => <AddressBox data={item} showDelete />}
      />
      <TouchableOpacity
        style={{
          width: '92%',
          height: 50,
          marginVertical: 20,
          marginHorizontal: '4%',
          backgroundColor: '#7E72FF',
          alignSelf: 'center',
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setShowModal(true);
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: '700'}}>
          Add New Address
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({});
