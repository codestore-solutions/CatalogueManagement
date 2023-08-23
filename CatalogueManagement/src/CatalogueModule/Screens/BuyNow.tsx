import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CartItem from '../../Components/CartItem';
import UserServices from '../Services/UserServices';
import Divider from '../../Components/Divider';
import BankOffers from '../../OrderProcessing/Components/BankOffers';
import {useNavigation, useRoute} from '@react-navigation/native';
import {COLORS} from '../../Constants/colors';

const BuyNow = () => {
  const navigate: any = useNavigation();
  const route = useRoute();
  const [data, setData] = useState([route.params]);
  const [bottomSheet, setBottomSheet] = useState(false);
  const [setQuantity, setSetQuantity] = useState(1);

  return (
    <View style={styles.body}>
      <Divider width={'100%'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 15,
        }}>
        <Text style={{fontSize: 16}}>Delivery to : G-18, Noida Sec-63</Text>
        <Text style={{color: 'blue'}} onPress={() => {}}>
          Change
        </Text>
      </View>
      <Divider width={'100%'} />
      <BankOffers />
      <Divider width={'100%'} />
      <View>
        <FlatList
          data={data}
          renderItem={({item, index}: any) => (
            <View>
              <CartItem
                id={item.productId}
                quantity={item.quantity}
                // setQuantity={setQuantity}
                index={index}
              />
              <Divider width={'100%'} />
            </View>
          )}
        />
        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 22, fontWeight: '600', color: '#000'}}>
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
                fontSize: 18,
                fontWeight: '300',
                color: COLORS.TextLight,
              }}>
              Subtotal
            </Text>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
              ₹1,499
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '300',
                color: COLORS.TextLight,
              }}>
              Taxes
            </Text>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
              ₹49
            </Text>
          </View>
          <View
            style={{
              marginVertical: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '300',
                color: COLORS.TextLight,
              }}>
              Delivery Charges
            </Text>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
              ₹99
            </Text>
          </View>
          <Divider width={'100%'} />
          <View
            style={{
              marginVertical: 15,
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
              ₹1,647
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.footer}
        onPress={() => {
          navigate.navigate('DeliveryTimeSelection', {...route.params});
        }}>
        <Text style={{color: 'white'}}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BuyNow;

const styles = StyleSheet.create({
  addressBox: {
    margin: 20,
    height: 110,
    width: '96%',
    borderWidth: 1,
    alignSelf: 'center',
    elevation: 5,
    backgroundColor: 'white',
    padding: 10,
  },
  footer: {
    width: '96%',
    height: 50,
    backgroundColor: '#7E72FF',
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: 'white',
    paddingHorizontal: '4%',
    height: '100%',
    paddingVertical: 10,
  },
  bottom: {
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 15,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
