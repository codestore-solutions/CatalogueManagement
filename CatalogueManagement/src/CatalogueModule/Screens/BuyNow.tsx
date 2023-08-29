import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CartItem from '../../Components/CartItem';
import UserServices from '../Services/UserServices';
import Divider from '../../Components/Divider';
import BankOffers from '../../OrderProcessing/Components/BankOffers';
import {useNavigation, useRoute} from '@react-navigation/native';
import {COLORS} from '../../Constants/colors';
import ProductServices from '../Services/ProductsServices';
import AddressCard from '../../Components/ReusableComponent/AddressCard';

const BuyNow = () => {
  const navigate: any = useNavigation();
  const route: any = useRoute();
  const [data, setData] = useState({});
  const [variantData, setVariantData] = useState({price: ''});
  const [bottomSheet, setBottomSheet] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    ProductServices.getProduct(route.params.productId)
      .then(res => {
        setData(res?.data);
        setIsLoading(false);
        const filteredData = res?.data.varients.filter(
          (item: any) => item.id == route.params.variantId,
        );
        setVariantData(filteredData[0]);
      })
      .catch(console.log);
  }, []);

  if (isLoading)
    return (
      <View style={styles.body}>
        <ActivityIndicator style={{margin: 40}} size={30} />
      </View>
    );

  return (
    <View style={styles.body}>
      <Divider width={'100%'} />
      <AddressCard />
      <Divider width={'100%'} />
      <BankOffers />
      <Divider width={'100%'} />
      <View>
        <CartItem
          variantId={route.params.variantId}
          data={data}
          index={1}
          setQty={setQuantity}
          qty={quantity}
        />
        <Divider width={'100%'} />

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
              ₹{parseInt(variantData.price) * quantity}
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
              ₹{parseInt(variantData.price) * quantity + 49 + 99}
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
