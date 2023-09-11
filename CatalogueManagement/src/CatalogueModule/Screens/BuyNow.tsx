import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
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
import PriceDetails from '../../Components/ReusableComponent/PriceDetails';

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
    <>
      <ScrollView contentContainerStyle={styles.body}>
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

          <PriceDetails variantData={variantData} quantity={quantity} />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.footer}
        onPress={() => {
          navigate.navigate('DeliveryTimeSelection', {...route.params});
        }}>
        <Text style={{fontSize: 16, fontWeight: '700', color: 'white'}}>
          Place Order
        </Text>
      </TouchableOpacity>
    </>
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
    zIndex: 4,
    bottom: 15,
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: 'white',
    paddingHorizontal: '4%',
    paddingVertical: 10,
    minHeight: '100%',
    paddingBottom: 100,
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
